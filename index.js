/**
 * @typedef {Object} LoggerOptions
 * @property {boolean} showBody
 */

module.exports = (/** @type {LoggerOptions} */options = {showBody: false}) => {
    const hasBody = req => Object.keys(req.body ?? {}).length > 0;

    const presenceBodyGetter = req => {
        return (hasBody(req) && 'body') || '';
    };

    const verboseBodyGetter = req => {
        return (hasBody(req) && body) || '<empty>';
    };

    const getBody = [
        presenceBodyGetter,
        verboseBodyGetter,
    ][Number(options?.showBody)];

    return async (req, res, next) => {
        const start = process.hrtime.bigint();

        res.addListener('finish', () => {
            const time = ((process.hrtime.bigint() - start) / BigInt(1000000));
            console.log(req.method, req.path, getBody(req), res.statusCode, `${time}ms`);
        });

        await next();
    }
};

Package express-mini-logger
===========================

Simple middleware for logging your incoming express requests

## Usage

CommonJS:
```js
const express = require('express');
const requestLogger = require('express-mini-logger');

const app = express();

app.use(requestLogger({
    printBody: true
}));
```

ESModule:
```js
import express from 'express';
import requestLogger from 'express-mini-logger';

const app = express();

app.use(requestLogger({
    printBody: true
}));
```

**Result:**
```
GET / <empty> 200 4ms
POST / { hello: 'world!' } 201 5ms
```

## Thanks

Pay me a coffee:

```
nano_3ntf6crkan6114rfb39d51udqdw4mrbt1x7n8uphx44ojhxcjo3exhk6dsme
```
<nano-donate data-address="nano_3ntf6crkan6114rfb39d51udqdw4mrbt1x7n8uphx44ojhxcjo3exhk6dsme" data-address-owner="Roger &quot;SparK&quot; Cruz"></nano-donate>
![nano_3ntf6crkan6114rfb39d51udqdw4mrbt1x7n8uphx44ojhxcjo3exhk6dsme](./donation.png)

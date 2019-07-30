const express = require('express');
const app = express();

const router = require('./routerRoute');

app.use('/dpath',router);

app.listen(8080);

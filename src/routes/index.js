const express = require('express');
const app = express()

app.use(require('./users'));
app.use(require('./proyects'));
app.use(require('./comments'));
app.use(require('./contact'));
app.use(require('./login'));


  module.exports = app;
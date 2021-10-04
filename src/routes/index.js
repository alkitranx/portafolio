const express = require('express');
const app = express()

app.use(require('./users'));
app.use(require('./proyects'));
app.use(require('./comments'));


  module.exports = app;
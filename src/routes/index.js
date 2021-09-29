const express = require('express');
const app = express()

app.use(require('./users'));
app.use(require('./proyects'))


  module.exports = app;
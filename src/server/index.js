const express = require('express'),
    app = express();
dotenv = require('dotenv').config();


require('./routes/index')
const sequelize = require('../db/config');
const User = require('../db/models/user')



 
app.listen(3000, (req, res) => {
  console.log('Server online');
  sequelize.sync()
  .then(() => {console.log("nos hemos conectado a la base de datos")})
  .catch(error =>{console.log("hubo un problema de conexion", error)})
});
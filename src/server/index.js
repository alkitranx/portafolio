const express = require('express'),
    app = express();
dotenv = require('dotenv').config();


app.use(require('./routes/index'));
const sequelize = require('../db/config');
const {User, Comments, Contact, Proyect} = require('../db/models')



 
app.listen(3000, (req, res) => {
  console.log('Server online');
  sequelize.sync({force: true})
  .then(() => {console.log("nos hemos conectado a la base de datos")})
  .catch(error =>{console.log("hubo un problema de conexion", error)})
});
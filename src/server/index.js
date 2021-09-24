const express = require('express');
const bodyparser= require('body-parser'),

    app = express();
dotenv = require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(require('./routes/index'));

const sequelize = require('../db/config');
const {User, Comments, Contact, Proyect} = require('../db/models');




 
app.listen(3000, (req, res) => {
  console.log('Server online');
  //sequelize.sync({force: true})
  //.then(() => {console.log("OK conexion BD")})
  //.catch(error =>{console.log("hubo un problema de conexion", error)})
});
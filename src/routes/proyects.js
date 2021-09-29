const express = require('express');
const app = express();
const {checkDescription, checkName} = require('../midlewares/validations/validationsProyects')


const proyectsController = require('../controllers/proyectsController')

app.post('/proyects',[checkDescription, checkName], proyectsController.addProyect)


module.exports = app;
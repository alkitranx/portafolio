const express = require('express');
const app = express();
const {checkDescription, checkName, checkUserId, checkRepository} = require('../midlewares/validations/validationsProyects')


const proyectsController = require('../controllers/proyectsController');


app.post('/proyects',[checkDescription, checkName, checkRepository, checkUserId], proyectsController.addProyect)

app.get('/proyects', proyectsController.getAllProyects)

app.get('/proyects/userId',proyectsController.findByUserIdAndName)


module.exports = app;
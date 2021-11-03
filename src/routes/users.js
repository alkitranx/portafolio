const express = require('express');
const app = express();

const authRole = require('../midlewares/roleValidations')
const userController = require('../controllers/userControllers');
const {checkFirstName,checkLastName,checkEmail, checkPassword, checkId} = require('../midlewares/validations/validationUsers');


app.get('/users/', authRole, userController.getAll);

app.get('/users/email', authRole, userController.findByEmail);

app.get('/users/:id', userController.findById);

app.post('/users', [checkFirstName, checkLastName, checkPassword, checkEmail], userController.addUser);

app.put('/users/:id',[checkFirstName, checkLastName, checkEmail, checkId], userController.updateUser);  

app.delete('/users/:id', [checkId, authRole], userController.deleteUser);



  module.exports = app;
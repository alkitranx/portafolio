const express = require('express');
const app = express();
const userController = require('../controllers/userControllers');
const {checkFirstName,checkLastName,checkEmail, checkPassword} = require('../midlewares/validations/validationUsers');


app.get('/users/', userController.getAll)

app.post('/users', [checkFirstName, checkLastName, checkPassword, checkEmail], userController.addUser);

app.put('/users/:id',[checkFirstName, checkLastName, checkEmail], userController.updateUser);  

app.delete('/users/:id', userController.deleteUser);

 





  module.exports = app;
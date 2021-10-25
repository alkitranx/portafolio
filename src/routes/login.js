const express = require('express');
const app = express();

const loginController = require('../controllers/loginController')
const{ checkEmail, checkPassword } = require('../midlewares/validations/validationUsers')

app.post('/signin',[checkEmail, checkPassword],loginController.login);





module.exports = app
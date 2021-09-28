const express = require('express');
const app = express();
const {User} = require('../db/models')
const userController = require('../controllers/userControllers')
const {checkFirstName,checkLastName,checkEmail, checkPassword} = require('../midlewares/validations/validationUsers')


app.get('/users/', userController.getAll)

app.post('/users', [checkFirstName, checkLastName, checkPassword, checkEmail], userController.addUser);

app.put('/users/:id', (req, res) => {

  const id = req.params.id;
  const body = req.body;

  return User.update({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    role: body.role
    }, {where : {id}}).then(userUpdate => res.json(userUpdate)
    ).catch(error => res.status(401).json(error));
});

app.delete('/users/:id', (req, res) => {
  const id =  req.params.id;

  return User.update({
    status: 'inactive'
  }, {where: {id}})
  .then(userDelete => res.json(userDelete))
  .catch(error => res.status(400).json(error))
});

 





  module.exports = app;
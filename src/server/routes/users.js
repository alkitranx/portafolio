const express = require('express');
const app = express();
const {User} = require("../../db/models");
const addUserController = require('../../controllers/userControllers')


app.get('/users', (req, res) => {
   return User.findAll()
   .then(userEntities => res.json(userEntities))
   .catch(error => res.status(400).json(error));
  });

app.post('/users', addUserController);

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
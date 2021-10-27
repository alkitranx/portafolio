const express = require('express');
const app = express();

const{ValidationsContact} = require('../midlewares/validations/validationsContact')
const contactController = require('../controllers/contactController')

app.post('/contact', ValidationsContact, contactController.addContact);
app.get('/contact/:id', contactController.findByUserId);
app.put('/contact/:id', ValidationsContact, contactController.update);
app.delete('/contact/:id', contactController.deleteContact);




module.exports = app
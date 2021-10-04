const express = require('express');
const app = express();

const contactController = require('../controllers/contactController')

app.post('/contact', contactController.addContact);
app.get('/contact/:id', contactController.findByUserId);
app.put('/contact/:id', contactController.update);
app.delete('/contact/:id', contactController.deleteContact);




module.exports = app
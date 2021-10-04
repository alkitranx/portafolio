const express = require('express');
const app = express();


const commentsController = require('../controllers/commentsController')


app.post('/comments', commentsController.addComment );
app.get('/comments', commentsController.getAll );
app.get('/comments/proyectId', commentsController.findByIdProyect );
app.delete('/comments/:id', commentsController.deleteComment); 



module.exports = app

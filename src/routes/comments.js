const express = require('express');
const app = express();

const{checkComment, checkEmail} = require('../midlewares/validations/validationsComments');
const commentsController = require('../controllers/commentsController');


app.post('/comments', [checkComment, checkEmail], commentsController.addComment );
app.get('/comments', commentsController.getAll );
app.get('/comments/proyectId', commentsController.findByIdProyect );
app.delete('/comments/:id', commentsController.deleteComment); 



module.exports = app

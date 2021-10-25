const {body} = require('express-validator');


//validaciones para ruta de comentarios

const checkComment = body('comment', 'el campo comentario no puede estar vacio').notEmpty().isString();
const checkEmail = body('email', 'email is required').notEmpty().isEmail();



module.exports = {
    checkEmail,
    checkComment
}

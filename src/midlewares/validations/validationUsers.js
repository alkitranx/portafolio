const {body, validationResult} = require('express-validator');


//validaciones para ruta de usuario

const checkFirstName = body('firstName', 'el nombre es obligatorio').notEmpty().isString();
const checkLastName = body('lastName', 'el apellido es obligatorio').notEmpty().isString();
const checkEmail = body('email', 'el email es obligatorio').notEmpty().isEmail();
const checkPassword = body('password', 'la clave es obligatoria y con un minimo de 6 caracteres').notEmpty().isLength(6);

module.exports = {
    checkFirstName,
    checkLastName,
    checkEmail,
    checkPassword
}

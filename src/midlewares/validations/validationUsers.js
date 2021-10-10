const {body, param,validationResult} = require('express-validator');


//validaciones para ruta de usuario

const checkFirstName = body('firstName', 'the firstname is required').notEmpty().isString();
const checkLastName = body('lastName', 'the lastname is required').notEmpty().isString();
const checkEmail = body('email', 'this email is invalid').notEmpty().isEmail();
const checkPassword = body('password', 'the password is mandatory and with a minimum of 6 characters').notEmpty();
const checkId = param('id', 'the id is invalid').notEmpty().isNumeric()

module.exports = {
    checkFirstName,
    checkLastName,
    checkEmail,
    checkPassword,
    checkId
}

const {body} = require('express-validator');


//validaciones para ruta de comentarios


const checkInstagram = body('instagram').isString();
const checkFacebook = body('facebook').isString();
const checkLinkedin = body('linkedin').isString();
const checkRepository= body('github').isURL();
const checkPhone = body('phone').isString().isNumeric();
const checkEmail = body('email', 'el email introducido no es valido').isString().isEmail();

const ValidationsContact = [checkInstagram, checkFacebook, checkLinkedin, checkRepository, checkEmail, checkPhone]


module.exports = {
    ValidationsContact
}

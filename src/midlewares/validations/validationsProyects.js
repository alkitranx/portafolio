const {body, validationResult} = require('express-validator');


//validaciones para ruta de proyectos

const checkName = body('name', 'el nombre es obligatorio').notEmpty().isString();
const checkDescription = body('description', 'la descripcion es obligatoria y de un minimo de 20 caracteres').notEmpty().isString().isLength(20);
const checkUserId = body('userId', 'el nombre es obligatorio').notEmpty().isString();//TODO: REVISAR SI ESTO VIENE DEL BODY O DEL PARAMS O OTRO LADO
const checkRepository = body('repository', 'debe introduccion una direccion URL').isURL();

module.exports = {
    checkName,
    checkDescription,
    checkUserId,
    checkRepository
}

const {body, validationResult} = require('express-validator');


//validaciones para ruta de proyectos

const checkName = body('name', 'el nombre es obligatorio').notEmpty().isString();
const checkDescription = body('description', 'la descripcion es obligatoria y de un minimo de 20 caracteres').notEmpty().isString().isLength(20);


module.exports = {
    checkName,
    checkDescription
}

const proyectService = require('../services/userService');
const {validationResult} = require('express-validator')


// controlador de creacion de proyectos

const addProyect = async (req, res) => {
    let body = req.body
    let proyect = {
        name:body.name,
        description: body.description,
        userId: body.userId
    };
    
    return await proyectService.addProyect(proyect)
    .then(newProyect => res.status(201).json(newProyect))
    .catch(error => res.status(400).json(error))

}

module.exports = {
    addProyect
}
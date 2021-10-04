const proyectService = require('../services/proyectService');
const {validationResult} = require('express-validator');


// controlador de creacion de proyectos

const addProyect = async (req, res) => {
    let body = req.body
    let proyect = {
        name:body.name,
        description: body.description,
        userId: body.userId,
        repository: body.repository
    };

    return await proyectService.addProyect(proyect)
    .then(newProyect => res.status(201).json(newProyect))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    
})};

// controlador de get proyectos todos

const getAllProyects = async (req, res) => {
    return await proyectService.getAll()
    .then(FindAllProyect => res.status(200).json(FindAllProyect))
    .catch(error => res.status(400).json(error))
}

// controlador de consulta de proyectos por id de usuario y por nombre de proyecto
const findByUserIdAndName = async (req, res) => {
    let body =  req.body;
    
    return await proyectService.findByUserIdAndName({where:{userId:body.userId, name: body.name}})
    .then(FindAllProyect => res.status(200).json(FindAllProyect))
    .catch(
        (error) => {res.status(400).json({message: error.message})}
)};

// controlador de actualizacion de proyectos

const update = async (req, res) => {
    let id = req.params.id
    let body = req.body
    let proyect = {
        name: body.name,
        description: body.description,
        repository: body.repository
    };
    console.log(proyect)
    return await proyectService.update({
        name: body.name,
        description: body.description,
        repository: body.repository},{where:{id}})
    .then(proyectUpdate => res.status(200).json(proyectUpdate))
    .catch(error => res.status(400).json(error))
}    

// controlador para eliminar proyectos
const destroy = async (req, res) => {
    id = req.params.id;

    return await proyectService.destroy({where:{id}}).then(proyectDelete => res.status(200).json(proyectDelete))
    .catch(error => res.status(400).json(error.message))

}


module.exports = {
    addProyect,
    getAllProyects,
    findByUserIdAndName,
    update,
    destroy
}
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

const findByUserIdAndName = async (req, res) => {
    let body =  req.body;
    
    return await proyectService.findByUserIdAndName({where:{userId:body.userId, name: body.name}})
    .then(FindAllProyect => res.status(200).json(FindAllProyect))
    .catch(
        (error) => {res.status(400).json({message: error.message})}
    )}
    





module.exports = {
    addProyect,
    getAllProyects,
    findByUserIdAndName
}
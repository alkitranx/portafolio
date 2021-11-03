const proyectService = require('../services/proyectService');
const {validationResult} = require('express-validator');


// controlador de creacion de proyectos

const addProyect =  (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    let body = req.body
    let proyect = {
        name:body.name,
        description: body.description,
        userId: body.userId,
        repository: body.repository
    };

    return  proyectService.addProyect(proyect)
    .then(newProyect => res.status(201).json(newProyect))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    
})};

// controlador de get proyectos todos

const getAllProyects =  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    return  proyectService.getAll()
    .then(FindAllProyect => res.status(200).json(FindAllProyect))
    .catch(error => res.status(400).json(error))
}

// controlador de consulta de proyectos por id de usuario y por nombre de proyecto
const findByUserIdAndName =  (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    let body =  req.body;
    
    return  proyectService.findByUserIdAndName({where:{userId:body.userId, name: body.name}})
    .then(FindAllProyect => res.status(200).json(FindAllProyect))
    .catch(
        (error) => {res.status(400).json({message: error.message})}
)};

// controlador de actualizacion de proyectos

const update =  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    let id = req.params.id
    let body = req.body
    let proyect = {
        name: body.name,
        description: body.description,
        repository: body.repository
    };
    console.log(proyect)
    return  proyectService.update({
        name: body.name,
        description: body.description,
        repository: body.repository},{where:{id}})
    .then(proyectUpdate => res.status(200).json(proyectUpdate))
    .catch(error => res.status(400).json(error))
}    

// controlador para eliminar proyectos
const destroy =  (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
    
    id = req.params.id;

    return  proyectService.destroy({where:{id}})
    .then(proyectDelete => res.status(200).json(proyectDelete))
    .catch(error => res.status(400).json(error.message))

}


module.exports = {
    addProyect,
    getAllProyects,
    findByUserIdAndName,
    update,
    destroy
}
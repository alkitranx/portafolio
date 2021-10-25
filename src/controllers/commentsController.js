const commentsService = require('../services/commentsService');
const{validationResult} = require('express-validator')

// controlador para crear un comentario

const addComment = async (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    let body = req.body;
    let comment = {
        email:body.email,
        comment: body.comment,
        proyectId: body.proyectId,
    };

    return await commentsService.add(comment)
    .then(newComment => res.status(201).json(newComment))
    .catch(error => res.status(400).json(error.message))
};

const getAll = async (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    return await commentsService.getAll()
    .then(allComments => res.status(200).json(allComments))
    .catch(error => res.status(400).json(error.message))
};


const findByIdProyect = async (req, res) => {
    let body = req.body;
    let proyectId = body.proyectId;    

    return await commentsService.findByIdProyect(proyectId)
    .then(commentById => res.status(200).json(commentById))
    .catch(error => res.status(400).json(error.message))
};


const deleteComment = async (req, res) => {
   let id = req.params.id;

    return await commentsService.destroy({where:{id}})
    .then(commentDelete => res.status(200).json(commentDelete))
    .catch(error => res.status(400).json(error.message))
};

module.exports = {
    addComment,
    getAll,
    findByIdProyect,
    deleteComment
}
    
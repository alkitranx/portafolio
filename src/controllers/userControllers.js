const userService = require('../services/userService');
const {validationResult} = require('express-validator');




// controlador de creacion de usuario

    const addUser = async (req ,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };
    
    let body = req.body
    let user = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        role: body.role,
        password: body.password
    };

    return await userService.addUser(user)
    .then(userCreated => res.status(201).json(userCreated))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    });
}

// controlador de listado de usuarios

    const getAll = async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
        };

        let limit = req.query.limit;
        let offset = req.query.offset;
        return await userService.getAll(
            {where:{status: 'active'}},
            {limit: Number(limit), offset: Number(offset)} )
            .then(getAllUser => res.status(200).json(getAllUser))
            .catch(error => res.status(400).json(error));
    };


// controlador para la modificacion del usuario

    const updateUser = async (req, res) => {

        let body =  req.body;
        let id = req.params.id
        return await userService.updateUser({
            firstName: body.firstName,
            lastName: body.lastName,
             email: body.email}
            ,{where:{id}})
            .then(updateUser => res.status(200).json(updateUser))
            .catch(error => res.status(400).json(error))};



// desactivar usuarios

    const deleteUser = async (req, res) => {
        
        let id = req.params.id;

        return await userService.deleteUser({
            status: 'inactive'
        }, {where:{id}})
        .then(deleteUser => res.status(200).json(deleteUser))
        .catch(error => res.status(400).json(error))
    };
    

module.exports = {
    addUser,
    getAll,
    updateUser,
    deleteUser
}
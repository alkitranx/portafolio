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
        let offset = req.query.offset; //TODO revisar como setear de mejor forma el listado para que sea mas util no entiendo como se une con el fronted
        return await userService.getAll(
            {where:{status: 'active'}},
            {limit: Number(limit), offset: Number(offset)} )
            .then(getAllUser => res.status(200).json(getAllUser))
            .catch(error => res.status(400).json(error));
    };

    // controlador de usuario filtrados por el email del usuario

    const findByEmail = async (req, res) => {

        let email = req.body.email;      
        return await userService.findByEmail(email)
        .then(findByEmail => res.status(200).json(findByEmail))
        .catch(error => res.status(400).json(error.message))
    }

    const findById = async (req, res) => {

        let id = req.params.id;      
        return await userService.findById(id)
        .then(findByEmail => res.status(200).json(findByEmail))
        .catch(error => res.status(400).json(error.message))
    }


// controlador para la modificacion del usuario

    const updateUser = async (req, res) => {

        const errors = validationResult(req); 
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
        };

        let body =  req.body;
        let id = req.params.id;
        return await userService.updateUser({
            firstName: body.firstName,
            lastName: body.lastName,
             email: body.email}
            ,{id})
            .then(updateUser => res.status(200).json(updateUser))
            .catch(error => res.status(400).json(error.message))};



// desactivar usuarios

    const deleteUser = async (req, res) => {

        const errors = validationResult(req); 
        if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
        };
        
        let id = req.params.id;

        return await userService.deleteUser({
            status: 'inactive'
        }, {id})
        .then(deleteUser => res.status(200).json(deleteUser))
        .catch(error => res.status(400).json(error.message))
    };
    

module.exports = {
    addUser,
    getAll,
    updateUser,
    deleteUser,
    findByEmail,
    findById
}
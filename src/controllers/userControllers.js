const userService = require('../services/userService/addUser');
const {validationResult} = require('express-validator')



// controlador de creacion de usuario

    const addUser = (req ,res) => {
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

    return userService.addUser(user)
    .then(userCreated => res.status(201).json(userCreated))
    .catch(error => res.status(400).json(error));
}

// controlador de listado de usuarios

    const getAll = (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    let limit = req.query.limit;
    let offset = req.query.offset;
    return userService.getAll({where:{status: 'active'}},{ limit: Number(limit), offset: Number(offset)} )
    .then(getAllUser => res.status(200).json(getAllUser))
    .catch(error => res.status(400).json(error));




    }

module.exports = {
    addUser,
    getAll
}
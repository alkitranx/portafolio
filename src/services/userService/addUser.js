const {userRepository} = require('../../repositories/index');

const addUser = (req, res) => {

    const body = req.body;

    return userRepository.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        role: body.role
    }).then(userCreate => res.status(201).json(userCreate)
    ).catch(error => res.status(400).json(error))

};


module.exports = {
    addUser
}
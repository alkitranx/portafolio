const {User} = require('../db/models');


function findAll() {
    return User.findAll()
}

function create(body) {
    return User.create(body)
      
}

function update(body, id) {
    return User.update(body, id)
}

function findbyEmail (email) {

    return User.findAll({where:{email}})
}



module.exports = {
    create,
    update,
    findAll,
    findbyEmail
}
const {User} = require('../db/models');


function findAll() {
    return User.findAll()
}

function create(body) {
    return User.create(body)
      
}

function update(body, id) {
    return User.update(body, {where:{id}})
}

function findByEmail (email) {

    return User.findOne({where:email})
}
function passwordFindByEmail (email) {

    return User.findAll({attributes:['password'],where:email})
}

function findById (id) {

    return User.findAll({where:{id}})
}



module.exports = {
    create,
    update,
    findAll,
    findByEmail,
    findById,
    passwordFindByEmail
}
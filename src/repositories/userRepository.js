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



module.exports = {
    create,
    update,
    findAll
}
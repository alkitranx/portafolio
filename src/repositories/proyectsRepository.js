const {Proyect} = require('../db/models')

function add (body) { 
    return Proyect.create(body)
}

function getAll () {
    return Proyect.findAll()
}

function findByUserId (userId) {

    return Proyect.findAll({where:{userId}})
}

function findById (id) {

    return Proyect.findAll({where:{id}})
}

function findByUserIdAndName (userId, name) {

    return Proyect.findAll(userId, name)
}

function update (body, id) {

    return Proyect.update(body, id)
}

function deleteProyect (id) {
    return Proyect.destroy(id)
}


module.exports = {
    add,
    getAll,
    findByUserId,
    update,
    findById,
    deleteProyect,
    findByUserIdAndName
}
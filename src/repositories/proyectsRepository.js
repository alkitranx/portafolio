const {Proyect} = require('../db/models')

function add (body) { 
    return Proyect.create(body)
}

function getAll () {
    return Proyect.findAll()
}

function findByUserId (userId) {

    return Proyect.getAll({where:{userId}})

}

function findById (id) {

    return Proyect.getAll({where:{id}})

}

function update (body, id) {

    return Proyect.create({body}, {where:{id}})
}

function deleteProyect (id) {
    return Proyect.destroy({where:{id}})
}


module.exports = {
    add,
    getAll,
    findByUserId,
    update,
    findById,
    deleteProyect
}
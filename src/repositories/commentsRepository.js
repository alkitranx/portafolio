const {Comments} = require('../db/models');

function add(body) {

    return Comments.create(body)
}

function getAll () {

    return Comments.findAll()

}

function findByIdProyect(proyectId) {
    return Comments.findAll(proyectId)
}

function deleteComment(id) {
    return Comments.destroy(id)
}


module.exports = {
    add,
    getAll,
    findByIdProyect,
    deleteComment
}

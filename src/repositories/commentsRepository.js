const {Comments} = require('../db/models');

function add(body) {

    return Comments.create(body)
}

function getAll () {

    return Comments.findAll()

}

function findByIdProyect(idProyect) {
    return Comments.findAll(idProyect)
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

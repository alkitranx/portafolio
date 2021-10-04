const commentsRepository = require('../repositories/commentsRepository');

async function add(comment) {

    return await commentsRepository.add(comment)
}

async function getAll() {

    return await commentsRepository.getAll()
}

async function findByIdProyect(idProyect) {
    return await commentsRepository.findByIdProyect(idProyect)
}

async function destroy(idProyect) {
    return await commentsRepository.deleteComment(idProyect)
}


module.exports = {
    add,
    getAll,
    findByIdProyect,
    destroy
}
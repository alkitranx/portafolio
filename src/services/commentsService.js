const commentsRepository = require('../repositories/commentsRepository');

 function add(comment) {

    return  commentsRepository.add(comment)
}

 function getAll() {

    return  commentsRepository.getAll()
}

 function findByIdProyect(proyectId) {

    return  commentsRepository.findByIdProyect({where:{proyectId: proyectId}})
}

 function destroy(idProyect) {
    return  commentsRepository.deleteComment(idProyect)
}


module.exports = {
    add,
    getAll,
    findByIdProyect,
    destroy
}
const {proyectsRepository } = require('../repositories/index')


// servicio de creacion de proyectos

async function addProyect (proyect) {
    
    return await proyectsRepository.add(proyect)
}





module.exports = {
    addProyect
}
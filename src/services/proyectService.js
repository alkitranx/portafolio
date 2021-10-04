const {proyectsRepository } = require('../repositories/index')


// servicio de creacion de proyectos

async function findByUserIdAndName (user, name) {

    const resultado = await proyectsRepository.findByUserIdAndName(user, name);
    console.log(resultado)
    return resultado;
          
}


async function addProyect (proyect) {  

    let proyecto =  await proyectsRepository.findByUserIdAndName ({where:{userId: proyect.userId, name:proyect.name}}) 

    if(proyecto.length !== 0) {
        
        throw new Error('este nombre ya esta en uso')
        
    }
   return await proyectsRepository.add(proyect)
}



async function getAll (){
    return await proyectsRepository.getAll()
}



module.exports = {
    addProyect,
    getAll,
    findByUserIdAndName
}
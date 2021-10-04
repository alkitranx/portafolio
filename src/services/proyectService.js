const {proyectsRepository } = require('../repositories/index')


// servicio de creacion de proyectos

async function findByUserIdAndName (user, name) {

    const resultado = await proyectsRepository.findByUserIdAndName(user, name); // TODO revisar si es necesario dejar este servicio o no o si tengo que hacer un controlador del mismo
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


async function update(proyect, id) {

    return await proyectsRepository.update(proyect, id)

} 

async function destroy(id) {

    return await proyectsRepository.deleteProyect(id)

} 



module.exports = {
    addProyect,
    getAll,
    findByUserIdAndName,
    destroy,
    update
    
}
const {userRepository} = require('../../repositories/index');

    async function addUser (user) {   

       /*  let email = await userRepository.findbyEmail(user.email) 

        if(email.length !== 0) */ // TODO REVISAR LA VALIDACION DEL MAIL 
        
        
        return await userRepository.create(user)}
        
        

      async function getAll() {

        return await userRepository.findAll()
     }   
    


module.exports = {
    addUser,
    getAll
}


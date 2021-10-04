const {userRepository} = require('../repositories/index');

    async function addUser (user) {   

       let email = await userRepository.findbyEmail(user.email) 

        if(email.length !== 0) {
            console.log(email)
            throw new Error(' email ya en uso ')
        }
        
              
        return await userRepository.create(user)
    }
        
        

    async function getAll() {

        return await userRepository.findAll()
     }   
    

     async function updateUser(user, id) {

        // TODO hacer validacion del email si se repite o no se repite

       return await userRepository.update(user, id)
     };

     async function deleteUser(user, id) {
         return await userRepository.update(user, id)
     }


module.exports = {
    addUser,
    getAll,
    updateUser,
    deleteUser
}


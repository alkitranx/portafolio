const { body } = require('express-validator');
const {userRepository} = require('../repositories/index');

    async function addUser (user) {   

       let email = await findByEmail({email: user.email}) 
       let password = user.password
       
        if(email.length !== 0) {
            console.log(email)
            throw new Error(' this email is already in use')
        }
        
        if(password.length<6){
            console.log(password)
            throw new Error('the password is mandatory and with a minimum of 6 characters')
        }

        return await userRepository.create(user)
    }        
        

    async function getAll() {

        return await userRepository.findAll()
     }   

    async function findByEmail(email) { 
        console.log(email)
        return await userRepository.findByEmail(email)
    } 
    async function passwordFindByEmail(email) { 
        console.log(email)
        return await userRepository.passwordFindByEmail(email)
    } 
    
    async function findById(id) { 
        console.log(id)
        return await userRepository.findById(id)
    } 

     async function updateUser(user, id) {
        
        let userId = await findById(id.id)
        let email =  await  findByEmail(user.email)
        
        if(userId == 0){
            console.log(id.id)
            throw new Error('This user does not exist')
        }

        if(email !== 0) {
            throw new Error(' this email is already in use')
        }

       return await userRepository.update(user, id.id)
     }

     async function deleteUser(user, id) {

        let userId = await findById(id.id)

        if(userId == 0){
            console.log(userId)
            throw new Error('This user does not exist')
        }

         return await userRepository.update(user, id.id)
     }




module.exports = {
    addUser,
    getAll,
    updateUser,
    deleteUser,
    findByEmail,
    findById,
    passwordFindByEmail
}


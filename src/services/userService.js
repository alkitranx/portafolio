const { body } = require('express-validator');
const {userRepository} = require('../repositories/index');

    async function addUser (user) {   

       let email = await userRepository.findByEmail1({email: user.email}) // TODO:  revisar porque no me deja usarlo con el metodo findOne
       let password = user.password
       
        if(email.length !== 0) {
            console.log(email)
            throw new Error(' this email is already in use')
        }
        
        if(password.length <6){
            console.log(password)
            throw new Error('the password is mandatory and with a minimum of 6 characters')
        }

        return userRepository.create(user)
    }        
        

    function getAll() {

        return userRepository.findAll()
     }   

    function findByEmail(email) { 
        console.log(email)
        return userRepository.findByEmail(email)
    } 
    function passwordFindByEmail(email) { 
        console.log(email)
        return userRepository.passwordFindByEmail(email)
    } 
    
    function findById(id) { 
        console.log(id)
        return userRepository.findById(id)
    } 

    async function updateUser(user, id) {
        
        let userId = await findById(id.id)
        let email =  await  userRepository.findByEmail1({email:user.email})
        
        if(userId == 0){
            console.log(id.id)
            throw new Error('This user does not exist')
        }

        if(email.length !== 0) {
            throw new Error(' this email is already in use')
        }

       return userRepository.update(user, id.id)
     }
    
    async function deleteUser(user, id) {

        let userId = await findById(id.id)

        if(userId == 0){
            console.log(userId)
            throw new Error('This user does not exist')
        }

         return userRepository.update(user, id.id)
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


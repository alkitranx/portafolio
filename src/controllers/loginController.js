const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userService = require('../services/userService');


const login =  async (req, res) => {
    
    let body = req.body
    

    await userService.findByEmail({email:body.email})
    .then(user => {

        if(!user){
            res.status(400).json({message: 'user not found'})
        }else{

            if(bcrypt.compareSync(body.password, user.password)) {

                let token = jwt.sign({user: user}, process.env.AUTH_SECRET, {
                    expiresIn: process.env.AUTH_EXPIRED
                }); 
                console.log(body.password)
                res.json({ 
                    user: user,
                    token: token 
                })
            }else {
                res.status(401).json({message: 'incorrect password'})
            }
        }

    })
    .catch(error =>  res.status(400).json(error.message))

  
    



}



module.exports = {
    login
}
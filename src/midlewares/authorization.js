const jwt = require('jsonwebtoken');


module.exports= (req, res, next) => {

    
    if(!req.headers.authorization){
        res.status(501).json('no ah venido ningun token')
    }else{
        const token= req.headers.authorization.split(" ")[1]
        console.log(token)
        jwt.verify(token, process.env.AUTH_SECRET, (error, decoded) => {
            if(error){
                res.status(501).json('hemos tenido un problema con el token')
            }else{
                next();
            }
        })

        
    }
    
    
}
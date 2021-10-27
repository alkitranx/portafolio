module.exports = (req, res, next) => {
    const role = req.body.role
    if(role !== 'admin'){
        res.status(401).json('no esta autorizado')
    }else{
        next();
    }    
}
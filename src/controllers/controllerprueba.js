
const service = require("../services/servicePrueba");


const revision = async (req ,res) => {

    return  service.comparativa(req.body)
        .then(userCreated => res.status(201).json(userCreated))
        .catch((error)=>{
            return res.status(400).json({message: error.message})
        });
}

module.exports = {
    revision
}
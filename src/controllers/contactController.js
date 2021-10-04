const contactService = require('../services/contactService')

// controlador para agregar datos de contacto
const addContact = async (req, res) => {
    let body = req.body
    let dataContact = {
        email:body.email,
        instagram: body.instagram,
        facebook:body.facebook,
        linkedin: body.linkedin,
        userId: body.userId,
        github: body.github,
        phone: body.phone
    };
    return await contactService.add(dataContact)
    .then(newDataContact => res.status(201).json(newDataContact))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    })
};

// controlador para buscar datos de contacto por id de usuario
const findByUserId = async (req, res) => {
    let id =  req.params.id

    return await contactService.findByUserId({where:{id}})
    .then(dateContact => res.status(200).json(dateContact))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    })
};


// controlador para actualizar los datos de contacto

const update = async (req, res) => {

    let id = req.params.id;
    let body = req.body;
    let dataContact = {email:body.email,
        instagram: body.instagram,
        facebook:body.facebook,
        linkedin: body.linkedin,
        github: body.github,
        phone: body.phone};

    return await contactService.update(dataContact, {where:{id}})    
    .then(newDataContact => res.status(200).json(newDataContact))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    })
};


// controlador para borrar datos de contacto de un usuario

const deleteContact = async (req, res) => {
    let id = req.params.id;

    return await contactService.destroy({where:{id}})
    .then(dataContactDelete => res.status(200).json(dataContactDelete))
    .catch((error)=>{
        return res.status(400).json({message: error.message})
    })

}

    
module.exports = {
    addContact,
    findByUserId,
    update,
    deleteContact
    }
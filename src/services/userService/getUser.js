const {userRepository} = require('../../repositories/index');

const getUser = (req, res) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
     return userRepository.findAll({where:{status: 'active'}},{ limit: Number(limit), offset: Number(offset)})
     .then(userEntities => res.json(userEntities))
     .catch(error => res.status(400).json(error))}; 

const getUserById = (req, res) => {
    const id = req.params.id
    const limit = req.query.limit;
    const offset = req.query.offset;
    return userRepository.findAll({where:{id ,status: 'active'}},{ limit: Number(limit), offset: Number(offset)})
    .then(userEntities => res.json(userEntities))
    .catch(error => res.status(400).json(error))}; 



module.exports = {
    getUser,
    getUserById
}
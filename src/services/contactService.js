const contactRepository = require('../repositories/contacRepository');


async function add(body) {
    return await contactRepository.add(body)
}

async function findByUserId(userid) {
    return await contactRepository.findByUserId(userid)
}

async function update(body, id) {
    return await contactRepository.modify(body, id)
}

async function destroy(id) {
    return await contactRepository.deleteContact(id)
}


module.exports = {
    add,
    findByUserId,
    update,
    destroy
}
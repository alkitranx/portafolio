const contactRepository = require('../repositories/contacRepository');


 function add(body) {
    return  contactRepository.add(body)
}

function findByUserId(userid) {
    return  contactRepository.findByUserId(userid)
}

function update(body, id) {
    return  contactRepository.modify(body, id)
}

function destroy(id) {
    return  contactRepository.deleteContact(id)
}


module.exports = {
    add,
    findByUserId,
    update,
    destroy
}
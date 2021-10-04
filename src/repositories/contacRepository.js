const {Contact} = require('../db/models');


function add(body) {
    return Contact.create(body)
}

function findByUserId(userId) {
    return Contact.findAll(userId)
}

function deleteContact(id) {
    return Contact.destroy(id)
}

function modify(body, id) {
    return Contact.update(body, id)
}

module.exports = {
    add,
    findByUserId,
    deleteContact,
    modify
}
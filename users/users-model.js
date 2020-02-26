const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users')
        .select('id', 'username', 'password', 'department');
}

function findBy(filter) {
    return db('users')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('users')
        .select('id', 'username', 'department')
        .where({id})
        .first()
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids);
        })
}
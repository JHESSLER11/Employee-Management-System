const db = require('../db/connection')

const getAllDept = () => {
    const sqlQuery = 'SELECT * FROM department';
    return db.query(sqlQuery)
}

const addDept = (name) => {
    const sqlQuery = 'INSERT INTO department (name) VALUES (?)';
    return db.query(sqlQuery, [name])
}

module.exports = {getAllDept, addDept}

const db = require('../db/connection')

const getAllRoles = () => {
    const sqlQuery = 'SELECT * FROM roles';
    return db.query(sqlQuery)
}

// const addDept = (name) => {
//     const sqlQuery = 'INSERT INTO department (name) VALUES (?)';
//     return db.query(sqlQuery, [name])
// }

module.exports = {getAllRoles}
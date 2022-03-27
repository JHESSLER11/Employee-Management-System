const db = require('../db/connection')

const getAllEmp = () => {
    const sqlQuery = 'SELECT * FROM employee';
    return db.query(sqlQuery)
}

// const addDept = (name) => {
//     const sqlQuery = 'INSERT INTO department (name) VALUES (?)';
//     return db.query(sqlQuery, [name])
// }

module.exports = {getAllEmp}
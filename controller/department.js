const db = require('../db/connection')
const inquirer = require('inquirer')

const getAllDept = () => {
    const sqlQuery = 'SELECT * FROM department';
    return db.query(sqlQuery)
}

const addDept = () => {
    inquirer.prompt([
        {
            name: 'newDept',
            type: 'input',
            message: 'What is the name of your new department?'

        }
    ])
    .then((answer) => {
        const sqlQuery = 'INSERT INTO department (name) VALUES (?)';
        db.query(sqlQuery, answer.newDept)   
    })
}

module.exports = {getAllDept, addDept}

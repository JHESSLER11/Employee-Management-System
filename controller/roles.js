const db = require('../db/connection')
const inquirer = require('inquirer')

const getAllRoles = () => {
    const sqlQuery = 'SELECT * FROM roles';
    return db.query(sqlQuery)
}

const addRole = async () => {
     await inquirer.prompt([

        {
            name: 'roleTitle',
            type: 'input',
            message: 'What is the title of your new role?'

        },

        {
            name: 'roleSalary',
            type: 'input',
            message: 'What is the salary of your new role?'

        },

        {
            name: 'roleDept',
            type: 'input',
            message: 'What department is your new role in?'

        }
    ])
    .then((answer) => {
        title = answer.roleTitle
        salary = answer.roleSalary
        dept = answer.roleDept
        const sqlQuery = `INSERT INTO roles(title, salary, department_id) VALUES ("${title}", "${salary}", "${dept}")`;
        db.query(sqlQuery)   
    })
}

module.exports = {getAllRoles, addRole}
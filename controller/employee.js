const db = require('../db/connection')
const inquirer = require('inquirer')

const getAllEmp = () => {
    const sqlQuery = 'SELECT * FROM employee';
    return db.query(sqlQuery)
}

const addEmp = async () => {
    await inquirer.prompt([

       {
           name: 'empFirst',
           type: 'input',
           message: 'What is the new employees first name?'

       },

       {
           name: 'empLast',
           type: 'input',
           message: 'What is the new employees last name?'

       },

       {
           name: 'empRole',
           type: 'input',
           message: 'What is the role id of the new employee?'

       },

       {
        name: 'empManager',
        type: 'input',
        message: 'What is the manager id for the new employee?'

    }

   ])
   .then((answer) => {
       first = answer.empFirst
       last = answer.empLast
       Role = answer.empRole
       manager = answer.empManager
       const sqlQuery = `INSERT INTO employee(first_name, last_name, role_id, manager_id) 
                            VALUES ("${first}", "${last}", "${Role}", "${manager}")`;
       db.query(sqlQuery)   
   })
}

const updateRole = async () => {

    let employees = await db.query(`SELECT first_name FROM employee`);

    console.log(employees)
    await inquirer.prompt([

        {
            name: 'Employee',
            type: 'list',
            choices: employees.map((employee) =>{
                return {
                    name: employee.first_name,
                    value: employee.id
                }
            }),
            message: "What employee would you like to update?"
        },

        {
            name: 'newRole',
            type: 'list',
            choices: 1,
            message: "select new employee role from list."
        }
    ])
}

const employeeName = async () => {
    const sqlQuery = `SELECT last_name FROM employee`
    db.query(sqlQuery)
}

module.exports = {getAllEmp, addEmp, updateRole}
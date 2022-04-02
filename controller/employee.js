const db = require('../db/connection')
const inquirer = require('inquirer')

const getAllEmp = () => {
    const sqlQuery = 'SELECT * FROM employee';
    return db.query(sqlQuery)
}
// adds employee
const addEmp = async () => {

    let [roles] = await db.query(`SELECT * FROM roles`)

    let [managers] = await db.query(`SELECT * FROM employee`)

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
           type: 'list',
           choices: roles.map((roleName) => {
            return {
                name: roleName.title,
                value: roleName.id
            }
        }),
           message: 'What is the role of the new employee?'

       },

       {
        name: 'empManager',
        type: 'list',
        choices: managers.map((managerName) => {
            return {
                name: managerName.first_name + " " + managerName.last_name,
                value: managerName.id
            }
        }),
        message: 'Who is the manager of the new employee?'

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
//updates employee role
const updateRole = async () => {

    let [employees] = await db.query(`SELECT * FROM employee`)

    console.log(employees)
     let selectedEmployee = await inquirer.prompt([

        {
            name: 'Employee',
            type: 'list',
            choices: employees.map((employeeName) => {
                return {
                    name: employeeName.first_name + " " + employeeName.last_name,
                    value: employeeName.id
                }
            }),
            message: "What employee would you like to update?"
        },

    ])
    
    let [roles] = await db.query(`SELECT * FROM roles`)

    let newRole = await inquirer.prompt([


        {
            name: 'newRole',
            type: 'list',
            choices: roles.map((roleName) => {
                return {
                    name: roleName.title,
                    value: roleName.id
                }
            }),
            message: "select new employee role from list."
        }
    ])
    // places the new employee id in the table
    await db.query(`UPDATE employee SET ? WHERE ?`, [{ role_id: newRole.newRole }, { id: selectedEmployee.Employee }]);
}

module.exports = {getAllEmp, addEmp, updateRole}
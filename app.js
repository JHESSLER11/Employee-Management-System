
const { getAllDept, addDept } = require('./controller/department')
const { getAllRoles } = require('./controller/roles')
const { getAllEmp } = require('./controller/employee')
const inquirer = require('inquirer')
const cTable = require('console.table');
//const db = require('./db/connection')

const init = async () => {
    const { choice } = await inquirer.prompt([

        {
            message: 'Choose from the options below',
            name: 'choice',
            type: 'list',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Quit']
        }
    ])
    //switch statement for each choice
    switch(choice) {
        case 'view all departments':
            const [deptRows] = await getAllDept();
            console.table(deptRows);
            init()
            break;

        case 'view all roles':
            const [rolesRows] = await getAllRoles();
            console.table(rolesRows)
            init()
            break;
        
        case 'view all employees':
            const [EmpRows] = await getAllEmp();
            console.table(EmpRows)
            init()
            break;
        
        case 'add a department':
            const [EmpRows] = await addDept();
            console.table(EmpRows)
            init()
            break;
    }

}


init()

const { getAllDept, addDept } = require('./controller/department')
const inquirer = require('inquirer')
const db = require('./db/connection')

const init = async () => {
    const { choice } = await inquirer.prompt([

        {
            message: 'Choose from the options below',
            name: 'choice',
            type: 'list',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a role', 'add an employee', 'update an employee role', 'Quit']
        }
    ])
    //switch statement for each choice
    switch(choice) {
        case 'view all departments':
        const [deptRows] = await getAllDept();
        console.log(deptRows);
        init()
        break;
    }

}


init()

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
function newEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'What position is this employee?',
            Choices: [
                'Manager',
                'Intern',
                'Engineer'
            ]
        },
        {
            type: 'list',
            name: 'Email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'list',
            name: 'id',
            message: 'What is the id of the employee?',
        }
    ]).then(({position }) => {
        switch(position) {
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the office number?'
                    }
                ])
            case 'Intern':
            case 'Engineer':
            default:
            
        }
    })
}

function renderHTMLFile() {
    fs.writeFileSync('./index.HTML'/*html*/,
    <ul>
        ${employees.map(employee => /*html*/`
        <li>${employee.getName()}<li>`)}
    </ul>)
}
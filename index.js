
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const employees = []

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
            name: 'name',
            message: 'What is the Name of the employee?',
        },
        {
            type: 'list',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'list',
            name: 'id',
            message: 'What is the id of the employee?',
        }
    ]).then(({position, name, email, id}) => {
        switch(position) {
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the office number?'
                    }
                ]).then(({officeNumber}) => {
                    employees.push(new Manager(
                        name,
                        id,
                        email,
                        officeNumber
                    ))
                })
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school did this intern go to?'
                    }
                ]).then(({school}) => {
                    employees.push(new Intern(
                        name,
                        id,
                        email,
                        school
                    ))
                })
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the github of this engineer?'
                    }
                ]).then(({github}) => {
                    employees.push(new Engineer(
                        name,
                        id,
                        email,
                        github
                    ))
                })
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

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
            choices: [
                'Manager',
                'Intern',
                'Engineer'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Name of the employee?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
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
                        message: 'What is the office number?',
                    }
                ]).then(({ officeNumber }) => {
                    employees.push(new Manager(
                        name,
                        id,
                        email,
                        officeNumber
                    ))
                    another();
                })
                break;
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school did this intern go to?',
                    }
                ]).then(({ school }) => {
                    employees.push(new Intern(
                        name,
                        id,
                        email,
                        school
                    ))
                    another();
                })
                break;
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the github of this engineer?',
                    }
                ]).then(({ github }) => {
                    employees.push(new Engineer(
                        name,
                        id,
                        email,
                        github
                    ))
                    another();
                })
                break;
            default:
            
        }
    })
    
}


function renderHTMLFile() {
    fs.writeFileSync('./index.HTML', /*html*/`
    <ul>
        ${employees.map(employee => /*html*/`
        <li><h1>${employee.getName()}</h1><li>
        <li>${employee.getId()}<li>
        <li>${employee.getEmail()}<li>`)}
    </ul>
    `)
}

function another() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'more',
            message: 'Do you want to create another employee?',
        }
    ]).then(({ more }) => {
        if(more) newEmployee()
        else renderHTMLFile()
    })
}

newEmployee();
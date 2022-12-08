const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What position is this employee?",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the Name of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the employee?",
      },
    ])
    .then(({ position, name, email, id }) => {
      switch (position) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?",
              },
            ])
            .then(({ officeNumber }) => {
              employees.push(new Manager(name, id, email, officeNumber));
              another();
            });
          break;
        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "What school did this intern go to?",
              },
            ])
            .then(({ school }) => {
              employees.push(new Intern(name, id, email, school));
              another();
            });
          break;
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "What is the github of this engineer?",
              },
            ])
            .then(({ github }) => {
              employees.push(new Engineer(name, id, email, github));
              another();
            });
          break;
        default:
      }
    });
}

function managerCard(employee) {
  return /*html*/ `
    <div class="card team-member" style="width: 18rem">
    <div class="card-headerr team-header"><h3 class="memeber-name">${employee.name}</h3>${employee.role}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
        </ul>
    </div>
    `;
}

function engineerCard(employee) {
  return /*html*/ `
    <div class="card team-member" style="width: 18rem">
    <div class="card-headerr team-header"><h3 class="memeber-name">${employee.name}</h3>${employee.role}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
        </ul>
    </div>
    `;
}

function internCard(employee) {
  return /*html*/ `
    <div class="card team-member" style="width: 18rem">
    <div class="card-headerr team-header"><h3 class="memeber-name">${employee.name}</h3>${employee.role}</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>
    `;
}

function renderHTMLFile() {
  fs.writeFileSync(
    "./index.HTML",
    /*html*/ `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .team-member {
            margin-bottom: 25px;
        }
        .team-header {
            font-weight: bolder;
            color: white;
            background-color: blue;
            text-align: center;
            font-size: 24px;
        }
        .memeber-name {
            margin-bottom: 0px;
        }
        .card-headerr {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            border-bottom: 1px solid rgba(0,0,0,.125);
        }
        </style>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Team Members</title>
  </head>
  <body>
    <div class="flex-container">
    ${employees
      .map((employee) => {
        switch (employee.getRole()) {
          case "Manager":
            return managerCard(employee);
          case "Engineer":
            return engineerCard(employee);
          case "Intern":
            return internCard(employee);
        }
      })
      .join("")}

    </div>
  </body>
</html>

    
        
    `
  );
}

function another() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "more",
        message: "Do you want to create another employee?",
      },
    ])
    .then(({ more }) => {
      if (more) newEmployee();
      else renderHTMLFile();
    });
}

newEmployee();

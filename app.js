// Required imports
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const handleTeamData = require('./src/html-template.js');

// Create empty team array
let teamArray = [];

function addEmployee () {
    inquirer
        .prompt(
            [
                {
                    type: 'list',
                    name: 'addEmployee',
                    message: 'What would you like to do?',
                    choices: ['Add an engineer', 'Add an intern', 'Complete my team']
                }
            ]
        )
        .then( (answer) => {
            switch (answer.addEmployee) {
                case 'Add an engineer':
                    addEngineer();
                    break;
                case 'Add an intern':
                    addIntern();
                    break;
                case 'Complete my team':
                    handleTeamData(teamArray);
                    break;
            }
        })
}

function addIntern () {
    inquirer
        .prompt(
            [
                {
                    type: 'text',
                    name: 'name',
                    message: "Please enter the intern's name?"
                },
                {
                    type: 'text',
                    name: 'employeeId',
                    message: 'What is their Employee ID?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'text',
                    name: 'school',
                    message: 'What school do they attend?'
                }
            ]
        )
        .then((internData) => {
            const intern = new Intern(internData.name, internData.employeeId, internData.email, internData.school);
            teamArray.push(intern);
            addEmployee();
        })
}

function addEngineer () {
    inquirer
        .prompt(
            [
                {
                    type: 'text',
                    name: 'name',
                    message: "Please enter the engineer's name?"
                },
                {
                    type: 'text',
                    name: 'employeeId',
                    message: 'What is their Employee ID?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'text',
                    name: 'gitHub',
                    message: 'What is their github username?'
                }
            ]
        )
        .then((engineerData) => {
            const engineer = new Engineer(engineerData.name, engineerData.employeeId, engineerData.email, engineerData.gitHub);
            teamArray.push(engineer);
           addEmployee();
        })
}

function initializeApp() {
    // Use inquirer to ask the user questions
    inquirer
        .prompt(
            [
                {
                    type: 'text',
                    name: 'name',
                    message: "Please enter the team manager's name?"
                },
                {
                    type: 'text',
                    name: 'employeeId',
                    message: 'What is their Employee ID?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'text',
                    name: 'officeNum',
                    message: 'What is their office number?'
                }
            ]
        )
        // Create new manager, push manager to team array
        .then((managerData) => {
            const manager = new Manager(managerData.name, managerData.employeeId, managerData.email, managerData.officeNum);
            teamArray.push(manager);
            addEmployee();
        });
};

initializeApp();

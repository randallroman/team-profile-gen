const inquirer = require('inquirer');
const Manager = require('../lib/manager');
const managerHtml = require('./manager_template');
let completeHtml = "";
const fs = require('fs');

let managerQues = [{
    type: 'input',
    message: `Please enter manager's name`,
    name: 'name'
},
{
    type: 'input',
    message: `Please enter manager's employee ID`,
    name: 'id'
},
{
    type: 'email',
    message: `Please enter manager's email address`,
    name: 'email'
},
{
    type: 'input',
    message: `Please enter manager's office number`,
    name: 'officeNum'
}]

let engineerQues = [{
    type: 'input',
    message: `Please enter engineer's name`,
    name: 'name'
},
{
    type: 'input',
    message: `Please enter engineer's employee ID`,
    name: 'id'
},
{
    type: 'email',
    message: `Please enter engineer's email address`,
    name: 'email'
},
{
    type: 'input',
    message: `Please enter engineer's GitHub username`,
    name: 'github'
}]

let internQues = [{
    type: 'input',
    message: `Please enter intern's name`,
    name: 'name'
},
{
    type: 'input',
    message: `Please enter intern's employee ID`,
    name: 'id'
},
{
    type: 'email',
    message: `Please enter intern's email address`,
    name: 'email'
},
{
    type: 'input',
    message: `Please enter intern's school`,
    name: 'school'
}]

let nextQuestions = [{
    type: 'list',
    message: `Please select one of the following:`,
    choices: ["Add an intern", "Add an engineer", "Finish building team"],
    name: 'next'
}]

function createManager() {
    inquirer.prompt(managerQues).then((answers) => {
        let managerName = answers.name;
        let managerId = answers.id;
        let managerEmail = answers.id;
        let managerOfficeNumber = answers.officeNum;

        let managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        console.log(managerObj);
        // completeHtml += managerHtml(managerObj);
        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}
function nextSteps() {
    inquirer.prompt(nextQuestions).then(answers => {
        switch (answers.next) {
            case "Add an intern":
                createIntern();
                nextSteps();
                break;

            case "Add an engineer":
                createEngineer();
                nextSteps();
                break;

            case "Finish building team":
                generateHtml();
                break;
        }

    }).catch(err => {
        console.error(err);
    })
}
function generateHtml() {
    fs.writeFileSync('../dist/output/output.html', completeHtml, (err, data) => {
        if (err) console.error(err);
        console.log("html generated successfully");
    })
}
createManager();

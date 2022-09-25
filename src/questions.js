const inquirer = require('inquirer');
const Manager = require('../lib/manager');
const managerHtml = require('../dist/output/manager_template');
let completeHtml = "";
const fs = require('fs');

let managerQuestions = [{
    type: 'input',
    message: `Please enter manager's name`,
    name: 'name'
},
{
    type: 'input',
    message: `Please enter manager's employee ID`,
    name: 'manager_emp_id'
},
{
    type: 'input',
    message: `Please enter manager's email address`,
    name: 'manager_email_id'
},
{
    type: 'input',
    message: `Please enter manager's office number`,
    name: 'manager_office_number'
}]

let nextQuestions = [{
    type: 'list',
    message: `Please select one of the following:`,
    choices: ["Add an intern", "Add an engineer", "Finish building team"],
    name: 'next'
}]

function createManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        let managerName = answers.name;
        let managerId = answers.manager_emp_id;
        let managerEmail = answers.manager_email_id;
        let managerOfficeNumber = answers.manager_office_number;

        let managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        console.log(managerObj);
        completeHtml += managerHtml(managerObj);
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
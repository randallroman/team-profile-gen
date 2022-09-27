const Manager = require('../lib/manager');
const Engineer = require("../lib/engineer");
const Intern = require('../lib/intern');
const inquirer = require('inquirer');
const questions = require('./questions');
// const createHTML = require('./createHTML');

let completeHtml = '';

function createManager() {
    inquirer.prompt(questions('manager')).then((answers) => {
        let managerName = answers.name;
        let managerId = answers.id;
        let managerEmail = answers.id;
        let managerOfficeNumber = answers.officeNum;

        let managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        completeHtml += managerHtml(managerObj);
        nextSteps();
    }).catch(err => {
        console.error(err);
    })
}

function createEngineer() {
    inquirer.prompt(questions('engineer')).then((answers) => {
        let engineerName = answers.name;
        let engineerId = answers.id;
        let engineerEmail = answers.id;
        let engineerGithub = answers.github;

        let engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        console.log(engineerObj);
        // completeHtml += managerHtml(managerObj);

        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}

function createIntern() {
    inquirer.prompt(questions('intern')).then((answers) => {
        let internName = answers.name;
        let internId = answers.id;
        let internEmail = answers.id;
        let internSchool = answers.school;

        let internObj = new Intern(internName, internId, internEmail, internSchool);
        // console.log(internObj);
        // completeHtml += managerHtml(managerObj);
        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}

function nextSteps() {
    inquirer.prompt(questions('next')).then(answers => {
        switch (answers.next) {
            case "Add an intern":
                createIntern();
                break;

            case "Add an engineer":
                createEngineer();
                break;

            case "Finish building team":
                generateHtml();
                break;
        }

    }).catch(err => {
        console.error(err);
    })
}

module.exports = createManager;

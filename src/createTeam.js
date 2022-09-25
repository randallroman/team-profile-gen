const Manager = require('../lib/manager');
const Engineer = require("../lib/engineer");
const Intern = require('../lib/intern');

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

function createEngineer() {
    inquirer.prompt(engineerQues).then((answers) => {
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
    inquirer.prompt(internQues).then((answers) => {
        let internName = answers.name;
        let internId = answers.id;
        let internEmail = answers.id;
        let internSchool = answers.school;

        let internObj = new Intern(internName, internId, internEmail, internSchool);
        console.log(internObj);
        // completeHtml += managerHtml(managerObj);
        nextSteps()
    }).catch(err => {
        console.error(err);
    })
}


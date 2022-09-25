const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var idiot = new Manager('fool', -999, 'fake', '0');

idiot.getName();
idiot.getRole();
idiot.getOfficeNumber();

var emp = new Employee('foo', 1, 'also fake');

emp.getName();
emp.getRole();
// emp.getOfficeNumber();

var chooChoo = new Engineer('Franklin', 9, 'totally fake', 'notagit');

chooChoo.getName();
chooChoo.getId();
chooChoo.getEmail();
chooChoo.getGitHub();


var peon = new Intern('Junior', 3.14, 'so so fake', 'NU');

peon.getName();
peon.getId();
peon.getEmail();
peon.getSchool();
const fs = require('fs');

function createHeader() {
    let headerText = `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Team</title>
      <meta name="description" content="team">
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    </head>
    <body>
    `;

    try {
        fs.writeFileSync('./dist/output.html', headerText);
        console.log('opened file and wrote header');
    } catch (err) {
        console.log("Unable to write header");
        throw err;
    }
}

function createCard(employee) {
    let field1 = '';
    let field2 = '';
    let name = employee.name;
    let id = employee.id;
    let email = employee.email;
    let role = employee.getRole();

    switch (employee.getRole()) {
        case 'Manager':
            field1 = 'Office Num: ';
            field2 = employee.officeNumber;
            break;

        case 'Engineer':
            field1 = 'Github: ';
            field2 = employee.github;
            break;

        case 'Intern':
            field1 = 'School';
            field2 = employee.school;
            break;
    }

    let text = `<div class="card">
                <p>${role}</p>
                <p>Name: ${name}</p>
                <p>ID: ${id}</p>
                <p>Email: ${email}</p>
                <p>${field1}: ${field2}</p>
                </div>`;

    try {
        fs.appendFileSync('./dist/output.html', text);
        console.log("Sucessfully wrote card");
     } catch (err) {
        console.log("unable to write file");
        throw err;
    };
    
}

function createFooter() {
    let text = `</body></html>`;

    try {
        fs.appendFileSync('./dist/output.html', text);
        console.log("Sucessfully wrote footer");
     } catch (err) {
        console.log("unable to write footer");
        throw err;
    };
}

module.exports = { createHeader, createCard, createFooter};
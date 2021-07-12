const fs = require('fs');
const path = require('path');

let allHtml = "";

module.exports = function handleTeamData(teamArray) {
    for (let i = 0; i < teamArray.length; i++) {
        const role = teamArray[i].getRole();
        if (role === "manager") {
            allHtml = allHtml + createMgrHtml(teamArray[i]);
        }
        if (role === "engineer") {
            allHtml = allHtml + createEngHtml(teamArray[i]);
        }
        if (role === "intern") {
            allHtml = allHtml + createIntHtml(teamArray[i]);
        }
    }
    const completeHtml = createPage();

    fs.writeFile(path.join(__dirname, '../dist/index.html'), completeHtml, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File written successfully, check out index.html for the result");
        }
    });
}

function createMgrHtml(data) {
    return `
    <div class="card border-info" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">
                Employee ID: ${data.employeeId}
                <br/>
                Email: <a href="mailto: ${data.email}">${data.email}</a>
                <br/>
                Office #: ${data.officeNum}
            </p>
        </div>
    </div>
    `;
}

function createEngHtml(data) {
    return `
    <div class="card border-info" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">
                Employee ID: ${data.employeeId}
                <br/>
                Email: <a href="mailto: ${data.email}">${data.email}</a>
                <br/>
                Github: <a href="https://github.com/${data.gitHub}">${data.gitHub}</a>
            </p>
        </div>
    </div>
    `;
}

function createIntHtml(data) {
    return `
    <div class="card border-info" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">
                Employee ID: ${data.employeeId}
                <br/>
                Email: <a href="mailto: ${data.email}">${data.email}</a>
                <br/>
                School: ${data.school}
            </p>
        </div>
    </div>
    `;
}

function createPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>

    <body>

        <div>
            <h1 id="page-banner">Team Profile</h1>
        </div>

        ${allHtml}

    </body>

    </html>
    `;
}
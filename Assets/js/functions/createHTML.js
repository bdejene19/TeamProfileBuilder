/**
 * Pseudocode:
 * - one function generates/writes html content 
 * - one function creates cards from array content 
 * - index 0 should be manager 
 * - index 1 - arr.length - 1 will be engineers or interns
 * 
 */

/**
 * Begin with array of prompt objects
 * filter array into 3 categories: Manager, Engineer, Intern
 * iterate through filtered arrays and create objects => pass in new object to create card html
 *      - card generate should have one variable within the function => determines dynamic property in html
 *      - dynamic cards: officeNumber, Github, School
 */

// import fs to write html file
const fs = require('fs');

/**
 * Generates employee card in new HTML file 
 * @param {Object} employeeAttribs Manager, Engineer or Intern class passed through to use properties to fill in HTML card data.
 * @returns Stringified HTML content that contains the styling for employee card.
 */
const createCard = (employeeAttribs) => {
    let dynamiceField = '';
    let dynamicFieldData = null;
    
    // dynamic field is the field that is unique to that object
    if (employeeAttribs.officeNumber) {
        dynamiceField = 'Office Number';
        dynamicFieldData = employeeAttribs.officeNumber;
    } else if (employeeAttribs.github) {
        dynamiceField = 'Github';
        // link github username to github account
        dynamicFieldData = `<a href="https://github.com/${employeeAttribs.github}" target="_blank">${employeeAttribs.github}</a>`;
    } else {
        dynamiceField = 'School';
        dynamicFieldData = employeeAttribs.school;
    }
    // stringified HTML content
    return `
        <article style="flex: 1 1 15em;  border-radius: 15px; border: solid black 1px; overflow: hidden; height: 100%; box-shadow: black 3px 5px 5px 0px;">
            <div style="display: flex; flex-direction: column; padding: 1em; flex-wrap: wrap; background-color: skyblue; color: white;">
                <h2 style="font-size: 1.25rem;">${employeeAttribs.name}</h2>
                <h3 style="font-size: 1.25rem;">${employeeAttribs.getRole()}</h3>
            </div>

            <div style="display: flex; flex-direction: column; justify-content: center; padding: 1em; background-color: lightgrey; width: 100%; height: 100%;">
                <div style="background-color: white;">
                    <p style="padding: 1.25em; border: solid black 2px; border-bottom: none;">
                        ID: ${employeeAttribs.id}
                    </p>
                    <p style="padding: 1.25em; border: solid black 2px; border-bottom: none;">
                        Email: <a href="mailto: ${employeeAttribs.email}">${employeeAttribs.email}</a>
                    </p>
                    <p style="padding: 1.25em; border: solid black 2px;">
                        ${dynamiceField}: ${dynamicFieldData}
                    </p>

                </div>
            </div>
        </article>
    ` 
}

/**
 * Writes new 
 * @param {string} fileName Name of newly generated HTML file.
 * @param {[]} fileContent Array of employee objects, including all types: Manager, Engineer, Intern.
 */
const writeHtmlFile = (fileName, fileContent) => {
    let appendedHTML ='';
    console.log(fileContent);
    fileContent.map(employee => {
        appendedHTML += createCard(employee);
    })
    let fullHTMLFile = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Builder</title>

            <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;;
            }
            </style>
        </head>
        <body>
            <header style="width: 100vw; padding: 1.5em; text-align: center; color: white; background-color: orange">
                <h1>Full Department</h1>
            </header>

            <main style="display: flex; flex-direction: row; flex-wrap: wrap; row-gap: 2em; column-gap: 3em; padding: 3em 5em;">
                ${appendedHTML}
            </main>
        </body>
        </html>
    `


    fs.writeFile(`${fileName}.html`, fullHTMLFile, (err) => err ? console.log('error occured') : console.log('success'))
}

module.exports = {
    writeHtmlFile,
}
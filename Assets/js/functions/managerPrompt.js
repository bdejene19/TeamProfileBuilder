const inquirer = require('inquirer');
const reused = require('../../../index');


const managerQuestions = ['Name:', 'Employee ID:', "Email:", "Office Number:"];

const askManagerQs = () => {
    const managerPromptQs = reused.createPrompts(managerQuestions);
    console.log('\nFill out Team Manager Information\n___________________\n')
    return inquirer.prompt(managerPromptQs)
}

module.exports = {
    askManagerQs,
}


// import inquirer module and functions from index.js file
const inquirer = require('inquirer');
const reused = require('../../../index');

// questions for Team Manager
const managerQuestions = ['Name:', 'Employee ID:', "Email:", "Office Number:"];

/**
 * Prints out beginning of Team Manager Info section and begins prompts for manager questions
 * @returns Manager questions prompt promise.
 */
const askManagerQs = () => {
    const managerPromptQs = reused.createPrompts(managerQuestions);
    console.log('\nFill out Team Manager Information\n___________________\n')
    return inquirer.prompt(managerPromptQs)
}

module.exports = {
    askManagerQs,
}


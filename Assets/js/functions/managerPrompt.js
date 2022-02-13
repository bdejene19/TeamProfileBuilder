const inquirer = require('inquirer');
const reused = require('../../../index');


const managerQuestions = ['Name:', 'Employee ID:', "Email:", "Office Number:"];
const managerPromptQs = reused.createPromptObjectsArray(managerQuestions);

console.log('Fill out Team Manager Information\n___________________')
inquirer.prompt(managerPromptQs)


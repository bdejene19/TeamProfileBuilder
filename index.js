/**
 * Pseudocode
 * Prompt user for employee information
 * generate html file => github profiles are links that take you to that user's github account
 * 
 * 
 * Steps - initialize application => repeat generating a user until user quits application
 * Take employee names as an array
 * questions to make 1 employee:
 *  1) Name
 *  2) Position
 *  3) Id value
 *  4) Email
 *  5) Office Number/School/Or Github => can be split into two => one question for parameter and one question for answer
 *  
 * 
 * 
 */

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type:'input'
    }
])
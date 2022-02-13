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
 *  5) Office Number/School/Or Github => can be split into two => one question for parameter and one question for answer
 *  
 * 
 * 
 */

// main file to run application

// import manager class to create Manager objects
const Manager = require('./Assets/js/classes/Manager')

// import functions for managers and team members
const addManager = require('./Assets/js/functions/managerPrompt');
const addTeam = require('./Assets/js/functions/addTeamMemberPrompts');

/**
 * Converts string to new string, replacing spaces with '_' and all characters lowercase.
 * @param {string} question Word or sentence that is converted to lowercase and spaceless. Replaces spaces with '_'.
 * @returns string without spaces and lowercase to act as name property in prompts object
 */
const convertToNameProperty = (question) => {
    let questionName = '';
    let tempQuestion = question.slice(0, question.length - 1)
    let allLower = tempQuestion.toLowerCase();
    if (allLower.includes(' ')) {
        questionName = allLower.replace(' ', '_');
    } else {
        questionName = allLower;
    }
    return questionName;
}

/**
 * Maps array and returns new array of prompt objects
 * @param {[]} questionsArr Array of questions to be asked in prompt
 * @returns new array of prompt objects (properties: type, message, name);
 */
const createPromptObjectsArray = (questionsArr) => {
    const promptArr = questionsArr.map(question =>  {
        let nameProperty = convertToNameProperty(question);
        return {
            type: 'input',
            message: `${question}`,
            name: nameProperty,
        }
    })
    return promptArr;
}

// keeps track of employees added
let teamList = [];

// export prompt object converter function and teamList variable 
exports.createPrompts = createPromptObjectsArray;
exports.teamList =  teamList;

// beginning of command line application
// asks manager questions and creates new object after validation. Pushes object to teamList and continues to next set of questions 
addManager.askManagerQs().then(data => {

    // if (data.name === '' || data.employee_id === '' || data.email === '' || data.office_number === '') {
    //     let errorMsg = new Error('Not all parameters were filled in Manager constructor');
    //     throw(errorMsg);
    //     // addManager.askManagerQs();
    // }
    let teamManager = new Manager(data.name, data.employee_id, data.email, data.office_number);
    teamList.push(teamManager);

    // next set of questions: add employees (engineer or intern)
    addTeam.teamMateAdder();

});




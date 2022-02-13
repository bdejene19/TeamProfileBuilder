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
const Manager = require('./Assets/js/classes/Manager')

const addManager = require('./Assets/js/functions/managerPrompt');
const addTeam = require('./Assets/js/functions/addTeamMemberPrompts');
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
let teamList = [];

exports.createPrompts = createPromptObjectsArray;
exports.teamList =  teamList;

addManager.askManagerQs().then(data => {
    let teamManager = new Manager(data.name, data.employee_id, data.email, data.office_number);
    teamList.push(teamManager);
    addTeam.teamMateAdder();

});
// require('./Assets/js/functions/managerPrompt');




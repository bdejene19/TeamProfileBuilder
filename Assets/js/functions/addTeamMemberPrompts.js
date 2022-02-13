const inquirer = require('inquirer');
const reused = require('../../../index');
const htmlGen = require('./createHTML');
const Engineer = require('../classes/Engineer')
const Intern = require('../classes/Intern')

const internQuestions = ['Name:', 'Employee ID:', "Email:", 'School:']
const engineerQuestions = ['Name:', 'Employee ID:', "Email:", "Github:"];
// const teamPromptQs = reused.createPrompts(teamMemberQuestions);




let teammatesAdded = [];
const determineMemberType = () => {
    teammatesAdded.push('hello');
    console.log('\nFill out Team Member Information\n___________________\n')

    return inquirer.prompt([{
        type: 'confirm',
        message:'Add Engineer:',
        name: 'engineer',
    }])
}
const askMemberQuestions = (choseEngineer) => {
    let questionsToPrompt = []
    if (choseEngineer) {
        console.log("\nFill in Engineering Team Member's information: \n_________________\n")   
        questionsToPrompt = reused.createPrompts(engineerQuestions);
    } else {
        console.log("\nIntern Autoselection turned on since engineer confirmation declined")
        console.log("Fill in Intern Team Member's information: \n_________________\n")  
        questionsToPrompt = reused.createPrompts(internQuestions);
    }
    return inquirer.prompt(questionsToPrompt);

}



const confirmAddMember = () => {
    return inquirer.prompt([{
        type: 'confirm',
        message:'Add Team Member:',
        name: 'addMember',
    }])
}
let isEngineer = null;
const teamMateAdder = () => {
    confirmAddMember().then((data) => {
        stillAdding = data.addMember;
        if (stillAdding) {
            determineMemberType()
            .then((determineMember) => {
                isEngineer = determineMember.engineer;
                askMemberQuestions(determineMember.engineer)
                .then(member => {
                    let newMember = null;
                    if (isEngineer) {
                        newMember = new Engineer(member.name, member.employee_id, member.email, member.github); 
                    } else {
                        newMember = new Intern(member.name, member.employee_id, member.email, member.school); 
                    }
                    reused.teamList.push(newMember);
                    teamMateAdder();
                })
            })
        } else {
            let teamLead = reused.teamList[0];
            let onlyEngs = reused.teamList.filter(obj => obj.getRole() === 'Engineer')
            let onlyInterns = reused.teamList.filter(obj => obj.getRole() === 'Intern');
            htmlGen.writeHtmlFile('test', reused.teamList);
        }
    }).catch(err => console.log(err))  ;

}

module.exports = {
    confirmAddMember,
    determineMemberType,
    askMemberQuestions,
    teamMateAdder,
    teammatesAdded,
}

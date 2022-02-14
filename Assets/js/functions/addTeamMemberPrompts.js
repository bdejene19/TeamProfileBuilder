// import required modules and classes 
const inquirer = require('inquirer'); // prompts
const reused = require('../../../index'); // for function to generate prompt object and push to total employees list
const htmlGen = require('./createHTML'); // generates new HTML


// classes
const Engineer = require('../classes/Engineer')
const Intern = require('../classes/Intern')

// questions for team member type
const internQuestions = ['Name:', 'Employee ID:', "Email:", 'School:']
const engineerQuestions = ['Name:', 'Employee ID:', "Email:", "Github:"];

// beginning of team member prompts 
/**
 * Beginning of team member prompts. Begins by asking if you want to add an engineer.
 * @returns Promise object holding key value pair for boolean engineer property
 */
const determineMemberType = () => {
    console.log('\nFill out Team Member Information\n___________________\n')
    return inquirer.prompt([{
        type: 'confirm',
        message:'Add Engineer:',
        name: 'engineer',
    }])
}

/**
 * 
 * @param {boolean} choseEngineer Determines questions to be asked in prompts. Questions are asked dynamically, depending on if engineer or intern was chosen.
 * @returns Promise object, holding prompts for specific questions - either engineer or intern related questions.
 */
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


/**
 * Determines if application will continue or terminate.
 * @returns Promise object holding boolean key value pair. 
 */
const confirmAddMember = () => {
    return inquirer.prompt([{
        type: 'confirm',
        message:'Add Team Member:',
        name: 'addMember',
    }])
}


let isEngineer = null;
/**
 * Main team member function. Confirms if user wants team member added and asks appropriate questions. 
 * Based on criteria, new Engineer or Intern object is created and added to employee list.
 * Steps continue repeatedly in a recursive fashion, until confirmAddMember() promise returns false.
 * If false, writes new HTML file using employee teamList data 
 */
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
            htmlGen.askFileName()
                .then(data => {
                    let team = reused.teamList;
                    let manager = team[0]
                    let engineers = team.filter(member => member.github)
                    let interns = team.filter(member => member.school)

                    let orderedArr = []
                    orderedArr = orderedArr.concat(manager);
                    
                    orderedArr = engineers.length > 0 ? orderedArr.concat(engineers) : orderedArr;
                    orderedArr = interns.length > 0 ? orderedArr.concat(interns) : orderedArr;
                    // let orderedTeam = [...manager, ...engineers, ...interns]
                    if (data.fileName !== '' && data.fileName !== undefined && data.fileName !== null) {
                        htmlGen.writeHtmlFile(data.fileName, orderedArr);
                    } else {
                        console.log('Improper file name chosen, please enter valid file name.\n__________\n')
                        htmlGen.askFileName();
                    }
                })
        }
    }).catch(err => console.log(err))  ;

}

// export functions to be available in index.js
module.exports = {
    confirmAddMember,
    determineMemberType,
    askMemberQuestions,
    teamMateAdder,
}

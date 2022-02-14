
const Employee = require('./Employee');
/**
 * Child of Employee class
 * Engineer class also requires github username as property
 * Has additional method getGithub() to return github property
 */
class Engineer extends Employee {
    constructor(name, id, email, gitusername) {
        if (name === undefined || name === '' || id === undefined || id === '' || email === undefined || email === '' || gitusername === undefined || gitusername === '') {
            const errorMsg = new Error('Not all parameters were filled in engineer constructor'); 
            throw(errorMsg);
        }
        super(name, id, email);
        this.github = gitusername;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }

    
}

module.exports = Engineer;


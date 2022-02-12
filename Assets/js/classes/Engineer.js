
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitusername) {
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

module.exports = Engineer


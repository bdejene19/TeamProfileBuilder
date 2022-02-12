
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.school = internSchool;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }  
}

module.exports = Intern

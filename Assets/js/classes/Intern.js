
const Employee = require('./Employee');
/**
 * Child of Employee class
 * Intern class also requires github username as property
 * Has additional method getSchool() to return school property
 */

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        if (name === undefined || name === '' || id === undefined || id === '' || email === undefined || email === '' || internSchool === undefined || internSchool === '') {
            const errorMsg = new Error('Not all parameters were filled in intern constructor'); 
            throw(errorMsg);
        }
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

module.exports = Intern;


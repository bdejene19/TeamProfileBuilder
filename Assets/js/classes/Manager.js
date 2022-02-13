const Employee = require('./Employee');
/**
 * Child of Employee class
 * Manager class also requires github username as property
 * getRole() method overriden => returns "Manager" instead of "Employee"
 * 
 */

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email); 
        this.officeNumber = officeNum;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;

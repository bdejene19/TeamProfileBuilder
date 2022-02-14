const Employee = require('./Employee');
/**
 * Child of Employee class
 * Manager class also requires github username as property
 * getRole() method overriden => returns "Manager" instead of "Employee"
 * 
 */

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        if (name === undefined || name === '' || id === undefined || id === '' || email === undefined || email === '' || officeNum === undefined || officeNum === '') {
            let errorMsg = new Error('Not all parameters were filled in Manager constructor');
            throw errorMsg;
        }
        super(name, id, email); 
        this.officeNumber = officeNum; 
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;

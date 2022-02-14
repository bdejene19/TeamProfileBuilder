/**
 * Parent Class of all other classes
 * All children classes will have a name, id and email
 * All children will have related methods => UNLESS overriden
 */
class Employee {
    constructor(name, id, email) {
        if (name === undefined || name === '' || id === undefined || id === '' || email === undefined || email === '') {
            const errMsg = new Error('Parameter missing in constructor');
            throw(errMsg);
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee
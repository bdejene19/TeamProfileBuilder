// import Employee class module to use in testing
const Employee = require('../Assets/js/classes/Employee');

// beginning of testing for 'Employee'
describe("Employee", () => {

    // Testing for initialization => checks to see if new employee object properties are updated correctly
    // also tests for missing properties in constructor
    it('Initialization', () => {
        it("Should create new Employee object when constructor is called, with a name, id and email", () => {
            const name = 'Bob';
            const id = 1;
            const email = 'test@gmail.com';

            const newEmployee = new Employee(name, id, email);
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
        })

        it('Should throw an error when a parameter any parameter is missing', () => {
            let cb = () => new Employee();
            let errorMsg = new Error('Parameter missing in constructor');
            expect(cb).ToThrow(errorMsg);
        })
    })

    // beginning of testing for Employee class methods
    // get name is expecting Bob when getName is invoked => making sure Bob in constructor and method are in tandem
    it('getName', () => {
        it("Should return Employee object's name property", () => {
            let expectedName = 'Bob';
            let newEmployee = new Employee('Bob', 1, 'testEmail');

            let newEmployeeName = newEmployee.getName();
            expect(newEmployeeName).toEqual(expectedName)
        })
    })
    // getId() is expecting the number 1 when getId is invoked => making sure id in constructor and method are in tandem
    it('getId', () => {
        it("Should return Employee object's id property", () => {
            let expectedId = 1;
            let newEmployee = new Employee('Bob', 1, 'testEmail');

            let newEmployeeId = newEmployee.getId();
            expect(newEmployeeId).toEqual(expectedId);
        })
    })

    // getEmail() is expecting the string testEmail@gmail.com when getEmail is invoked => making sure id in constructor and method are in tandem
    it('getEmail', () => {
        it("Should return Employee object's em property", () => {
            let expectedEmail = 'test@gmail.com';
            let newEmployee = new Employee('Bob', 1, 'test@gmail.com');

            let newEmployeeEmail = newEmployee.getEmail();
            expect(newEmployeeEmail).toEqual(expectedEmail);
        })
    })

    // method is expected to return the String Employee
    it('getRole', () => {
        it("Should return string saying Employee", () => {
            let expectedRole = 'Employee';
            let newEmployee = new Employee('Bob', 1, 'testEmail@gmail.com');
            let employeeRole = newEmployee.getRole();
            expect(employeeRole).toEqual(expectedRole);
        })
    })
}) 
const Manager = require('../Assets/js/classes/Manager');

// beginning of test cases
// Manager test cases: initialization of constructor, and methods: getName(), getId(), getEmail(), getRole()

describe('Manager', () => {
    // Intern initialization test to determine properties of Intern object have properly been set
    describe('Initialization',() => {
        it("Should return an Manager object, with the properties extended from Manager class (name, id, email) and github", () => {
            const name = 'Bob';
            const id = 1;
            const email = 'email value';
            const officeNum = '123';

            const newManager = new Manager(name, id, email, officeNum)

            expect(newManager.name).toEqual(name);
            expect(newManager.id).toEqual(id);
            expect(newManager.email).toEqual(email);   
            expect(newManager.officeNumber).toEqual(officeNum);        
        })

        it("Should return an error when not all properties are passed into constructor", () => {
            const cb = () => new Manager();

            const errorMsg = new Error('Not all parameters were filled in Manager constructor');

            expect(cb).toEqual(errorMsg)
        })
    })

    // beginning of testing for Manager class methods
    // get name is expecting Bob when getName is invoked => making sure Bob in constructor and method are in tandem
    describe('getName', () => {
        it("Should return Manager object's name property", () => {
            let expectedName = 'Bob';
            let newManager = new Manager('Bob', 1, 'testEmail', '123');

            let newManagerName = newManager.getName();
            expect(newManagerName).toEqual(expectedName)
        })
    })
    // getId() is expecting the number 1 when getId is invoked => making sure id in constructor and method are in tandem
    describe('getId', () => {
        it("Should return Manager object's id property", () => {
            let expectedId = 1;
            let newManager = new Manager('Bob', 1, 'testEmail', '123');

            let newManagerId = newManager.getId();
            expect(newManagerId).toEqual(expectedId);
        })
    })

   

    // method is expected to return the String Manager
    describe('getRole', () => {
        it("Should return string saying Manager", () => {
            let expectedRole = 'Manager';
            let newManager = new Manager('Bob', 1, 'testEmail@gmail.com', '123');
            let employeeRole = newManager.getRole();
            expect(employeeRole).toEqual(expectedRole);
        })
    })
})
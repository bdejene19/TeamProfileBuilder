const Intern = require('../Assets/js/classes/Intern');

// Intern Class test cases: initialization, and methods: getName(), getId(), getEmail(), getSchool(), getRole()
describe('Intern', () => {
    it('Initialization',() => {
        // Intern initialization test to determine properties of Intern object have properly been set
        it("Should return an Intern object, with the properties extended from Intern class (name, id, email) and github", () => {
            const name = 'Bob';
            const id = 1;
            const email = 'email value';
            const internSchoolName = 'UWO';

            const newIntern = new Intern(name, id, email, internSchoolName)

            expect(newIntern.name).toEqual(name);
            expect(newIntern.id).toEqual(id);
            expect(newIntern.email).toEqual(email);   
            expect(newIntern.school).toEqual(internSchoolName);        
        })

        // Test to ensure error is thrown when not enough parameters are passed through
        it("Should return an error when not all parameters in constructor are passed for Intern Object", () => {
            const cb = () => new Intern();
            const errorMsg = new Error('Not all parameters were filled in intern constructor'); 
            expect(cb).to(errorMsg);
        })
    })

    // beginning of testing for Intern class methods
    // get name is expecting Bob when getName is invoked => making sure Bob in constructor and method are in tandem
    it('getName', () => {
        it("Should return Intern object's name property", () => {
            let expectedName = 'Bob';
            let newIntern = new Intern('Bob', 1, 'testEmail', 'gitAccount');

            let newInternName = newIntern.getName();
            expect(newInternName).toEqual(expectedName)
        })
    })
    // getId() is expecting the number 1 when getId is invoked => making sure id in constructor and method are in tandem
    it('getId', () => {
        it("Should return Intern object's id property", () => {
            let expectedId = 1;
            let newIntern = new Intern('Bob', 1, 'testEmail', 'gitAccount');

            let newInternId = newIntern.getId();
            expect(newInternId).toEqual(expectedId);
        })
    })

    // getEmail() is expecting the string testEmail@gmail.com when getEmail is invoked => making sure id in constructor and method are in tandem
    it('getEmail', () => {
        it("Should return Intern object's em property", () => {
            let expectedEmail = 'test@gmail.com';
            let newIntern = new Intern('Bob', 1, 'test@gmail.com', 'gitaccount');

            let newInternEmail = newIntern.getEmail();
            expect(newInternEmail).toEqual(expectedEmail);
        })
    })

    // method is expected to return the String Intern
    it('getRole', () => {
        it("Should return string saying Intern", () => {
            let expectedRole = 'Intern';
            let newIntern = new Intern('Bob', 1, 'testEmail@gmail.com', 'gitAccount');
            let employeeRole = newIntern.getRole();
            expect(employeeRole).toEqual(expectedRole);
        })
    })

    it('getSchool', () => {
        it("Should return school property (String) of newly generated Intern object", () => {
            const school = 'UWO'
            const newIntern = new Intern('Bemnet', '1', 'test@gmail.com', 'UWO');
            const internSchoolName = newIntern.getSchool();
            expect(internSchoolName).toEqual(school);
        })
    })
})
const Engineer = require('../Assets/js/classes/Engineer');


describe('Engineer', () => {
    it('Initialization',() => {
        it("Should return an Engineer object, with the properties extended from Engineer class (name, id, email) and github", () => {
            const name = 'Bob';
            const id = 1;
            const email = 'email value';
            const githubUsername = 'gitID_123';

            const newEngineer = new Engineer(name, id, email, githubUsername)

            expect(newEngineer.name).toEqual(name);
            expect(newEngineer.id).toEqual(id);
            expect(newEngineer.email).toEqual(email);   
            expect(newEngineer.github).toEqual(githubUsername);        
        })

        it("Should return an error when not all parameters in constructor are passed for Engineer Object", () => {
            const cb = () => new Engineer();
            const errorMsg = new Error('Not all parameters were filled in engineer constructor'); 
            expect(cb).to(errorMsg);
        })
    })

    // beginning of testing for Engineer class methods
    // get name is expecting Bob when getName is invoked => making sure Bob in constructor and method are in tandem
    it('getName', () => {
        it("Should return Engineer object's name property", () => {
            let expectedName = 'Bob';
            let newEngineer = new Engineer('Bob', 1, 'testEmail', 'gitAccount');

            let newEngineerName = newEngineer.getName();
            expect(newEngineerName).toEqual(expectedName)
        })
    })
    // getId() is expecting the number 1 when getId is invoked => making sure id in constructor and method are in tandem
    it('getId', () => {
        it("Should return Engineer object's id property", () => {
            let expectedId = 1;
            let newEngineer = new Engineer('Bob', 1, 'testEmail', 'gitAccount');

            let newEngineerId = newEngineer.getId();
            expect(newEngineerId).toEqual(expectedId);
        })
    })

    // getEmail() is expecting the string testEmail@gmail.com when getEmail is invoked => making sure id in constructor and method are in tandem
    it('getEmail', () => {
        it("Should return Engineer object's em property", () => {
            let expectedEmail = 'test@gmail.com';
            let newEngineer = new Engineer('Bob', 1, 'test@gmail.com', 'gitaccount');

            let newEngineerEmail = newEngineer.getEmail();
            expect(newEngineerEmail).toEqual(expectedEmail);
        })
    })

    // method is expected to return the String Engineer
    it('getRole', () => {
        it("Should return string saying Engineer", () => {
            let expectedRole = 'Engineer';
            let newEngineer = new Engineer('Bob', 1, 'testEmail@gmail.com', 'gitAccount');
            let employeeRole = newEngineer.getRole();
            expect(employeeRole).toEqual(expectedRole);
        })
    })

    it('getGithub', () => {
        it("Should return Engineer object's Github username", () => {
            let expectedGitUsername = 'bdejene19@gmail.com';
            let newEngineer = new Engineer('Bob', 1, 'testEmail@gmail.com', 'bdejene19@gmail.com');

            let engineerGithub = newEngineer.getGithub();
            expect(engineerGithub).toEqual(expectedGitUsername);
            
        })
    })
})
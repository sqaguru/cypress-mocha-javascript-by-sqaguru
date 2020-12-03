import LoginPage from '../../support/PageObject/LoginPage'


describe('Automation Test Suite ', function() {
    

    it('Cypress Test Case', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable

    const loginPage = new LoginPage();

    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        loginPage.getUserName().type("Admin")
        loginPage.getPassword().type("admin123")
        loginPage.getLogin().click()
        
    
    })

})
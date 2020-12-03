
describe('Orange HRM',function(){

    it ('New User Login',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.xpath("//input[@id='txtUsername']").type("Admin")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click()
        cy.wait(500)
        cy.xpath("//span[contains(text(),'Assign Leave')]").click()
    })

    
})
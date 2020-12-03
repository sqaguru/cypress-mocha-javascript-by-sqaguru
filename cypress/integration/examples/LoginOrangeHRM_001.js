describe('FaceBook Registration',function(){

    it ('Registration of new user',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.xpath("//input[@id='txtUsername']").type("Admin")
        cy.get("#btnLogin").click()
        //cy.get("#btnLogin").contains('Password cannot be empty'

    })
})
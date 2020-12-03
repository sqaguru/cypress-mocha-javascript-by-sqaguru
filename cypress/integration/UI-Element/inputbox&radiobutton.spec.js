 
describe('Registration',function(){

    it ('Registration of new user',function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.url().should('include','automationtesting')
        cy.xpath('//div[1]/div[1]/input[@type="text"]').should('be.enabled').type("Test")
        cy.xpath('//div[1]/div[2]/input[@type="text"]').should('be.enabled').type("Guru")
        cy.get('input[value=Male]').should('be.visible').should('not.be.checked').click()

    })
})

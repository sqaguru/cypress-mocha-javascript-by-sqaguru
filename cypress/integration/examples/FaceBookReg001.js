/// <reference types="Cypress" />

describe('FaceBook Registration',function(){

    before(function(){

        cy.fixture('example').then(function(data){
          this.data = data

        })
    })

    it ('Registration of new user',function(){
        cy.visit("https://en-gb.facebook.com/r.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer%2F&locale=en_GB&display=page")
        cy.get("input[name='firstname']").type(this.data.FirstName);
        cy.get("input[name='lastname']").type(this.data.LastName);
        cy.get("input[name='reg_email__']").type("9986552015")
        cy.get("input[name='reg_passwd__']").type("1234567")
        cy.get("#day").select("3")
        cy.get("#month").select("Feb")
        cy.get("#year").select("1999")
        cy.xpath("//label[contains(text(),'Female')]").click()
        cy.focused.xpath("//button[contains(text(),'Sign Up')]").click()
        // cy.get(":nth-child(1) > ._58mt").click()
       
        
    })
})

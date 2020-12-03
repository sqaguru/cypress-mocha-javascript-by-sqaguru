describe('checkbox and dropdown',function(){

    it ('Hobbies Checkboxes',function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        //check the checkboxex
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        //unckeck the checkboxes
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //select multiple option using array
        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])


    })

    it ('Skills dropdownn',function(){
       
        cy.get('#Skills').select('Analytics').should('have.value','Analytics')

    })

    it (' Language Multi Select',function(){
       
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Croatian').click()

    })

    it ('Country Dropdown',function(){
       
        cy.get('[role=combobox]').click({force:true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')

    })
})
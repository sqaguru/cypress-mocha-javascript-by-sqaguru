describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
})
})
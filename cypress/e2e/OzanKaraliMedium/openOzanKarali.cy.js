describe('Hello world project', () => {
   it('go ozan karali medium', () => {
    cy.visit("https://medium.com/@ozankarali96")
    cy.title().should('eq',"Ozan İbrahim Karali - Medium")
    cy.title().should('contains',"Ozan")
   }); 
});
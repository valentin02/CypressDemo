describe('Hello world project', () => {
   it('go ozan karali medium', () => {
      cy.visit('https://medium.com/@someone/some-article', {
         timeout: 120000,          // wait up to 120s for document.readyState=complete
      })
      cy.title().should('eq', "Ozan İbrahim Karali - Medium")
      cy.title().should('contains', "Ozan")
   });
});
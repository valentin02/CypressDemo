describe('UI tests', () => {

    const name = 'Automation Tester';
    const userEmail = 'automation@test.com';
    const currentAddress  = 'Extramuros Raúl s/n. Puerta 180, Paterna, Cat 94959';
    const permanentAddress = 'Puerta 833 Rua Lorenzo s/n., Santa Coloma de Gramanet, Cbr 46303';

    it('Submit form', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id=userName]').type(name)
        cy.get('input[id=userEmail]').type(userEmail)
        cy.get('textarea[id=currentAddress]').type(currentAddress)
        cy.get('textarea[id=permanentAddress]').type(permanentAddress)

        cy.get('button[id=submit]').click()
        
        cy.get('p#name').should('contain.text', `Name:${name}`);
        cy.get('p#email').should('contain.text', `Email:${userEmail}`);
        cy.get('p#currentAddress').should('contain.text', `Current Address :${currentAddress}`);
        cy.get('p#permanentAddress').should('contain.text', `Permananet Address :${permanentAddress}`);

    });
});
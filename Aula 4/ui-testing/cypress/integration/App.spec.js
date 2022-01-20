describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should load skills list as the button is clicked', () => {
        cy.get('#load-skills-button').click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });
    it('should load one skill after input and click search button', () => {
        cy.get('input').type('front-end');
        cy.get('#search-button').click();
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });

});
describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should load skills list as the button is clicked', () => {
        cy.get('#load-skills-button').click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });

    it('should fill all the fields and add the skill', () => {
        cy.get('#input-skill').type('JavaScript');
        cy.get('#input-developer').type('Maria');
        cy.get('#input-technology').type('React');
        cy.get('#input-role').type('Leader');
        cy.get('#load-skills-button').click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });

    it('should click on the button and verify the response content', () => {
        cy.get('#load-skills-button').click();
        cy.get(':nth-child(11) > :nth-child(2)').should('contain', 'dev name 1');
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });

    it('should return the inputted technology', () => {
        cy.typeText('#input-technology', 'React');
        cy.get('#load-skills-button').click();
        cy.get('li').should('be.visible');
        cy.contains('React');
    });
});
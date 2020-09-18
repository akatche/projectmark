/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('guest user can login with right credentials', () => {
        cy.get('input[name=email]').type('admin@projectmark.com');

        cy.get('input[name=password]').type(`admin{enter}`);

        cy.url().should('include', '/dashboard')
    });

    it('guest should see error message if password or email is wrong', () => {
        cy.get('input[name=email]').type('admin@projectmark.com');

        cy.get('input[name=password]').type(`admin2{enter}`);

        cy.get('ul > li').contains('These credentials do not match our records.');
    });

    it('can go to forgot your password page', () => {
        cy.get('a').contains('Forgot your password?').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/forgot-password');
    });
});

/// <reference types="cypress" />
const faker = require('Faker');

context('Register', () => {
    beforeEach(() => {
        cy.visit('/register');
    });

    it('guest user can register', () => {
        cy.get('input[name=name]').type('Ale');

        cy.get('input[name=email]').type(faker.internet.email());

        cy.get('input[name=password]').type(`alealeale`);

        cy.get('input[name=password_confirmation]').type(`alealeale{enter}`);

        cy.url().should('include', '/dashboard')
    });

    it('email can only register once', () => {
        cy.get('input[name=name]').type('Ale');

        cy.get('input[name=email]').type('admin@projectmark.com');

        cy.get('input[name=password]').type(`alealeale`);

        cy.get('input[name=password_confirmation]').type(`alealeale{enter}`);

        cy.get('ul > li').contains('The email has already been taken.');
    });

    it('password must be at least 8 characters', () => {
        cy.get('input[name=name]').type('Ale');

        cy.get('input[name=email]').type(faker.internet.email());

        cy.get('input[name=password]').type(`alea`);

        cy.get('input[name=password_confirmation]').type(`alea{enter}`);

        cy.get('ul > li').contains('The password must be at least 8 characters.');
    });

    it('password confirmation should match', () => {
        cy.get('input[name=name]').type('Ale');

        cy.get('input[name=email]').type(faker.internet.email());

        cy.get('input[name=password]').type(faker.internet.password());

        cy.get('input[name=password_confirmation]').type(`alealeale{enter}`);

        cy.get('ul > li').contains('The password confirmation does not match.');
    });

    it('can go to login page', () => {
        cy.get('a').contains('Already registered?').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/login');
    });
});

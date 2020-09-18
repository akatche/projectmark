/// <reference types="cypress" />

context('Post', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy=post-0-title]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href);
            });
    });

    it('can go back to the blog from the read more button', () => {
        cy.get('[data-cy=back-to-blog]').click();

        cy.url().should('eq', Cypress.config().baseUrl +'/')
    });

    it('can go back to the blog from the logo', () => {
        cy.get('[data-cy=logo]').click();

        cy.url().should('eq', Cypress.config().baseUrl +'/')
    });

    it('can go back to the blog from the home item', () => {
        cy.get('[data-cy=home-link]').click();

        cy.url().should('eq', Cypress.config().baseUrl +'/')
    });

    it('can go to the author page', () => {
        cy.get('[data-cy=author-page]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href);
                cy.url().should('eq', Cypress.config().baseUrl + href);
            })
    });

    context('Guest user', () => {
        it('can go to login', () => {
            cy.get('[data-cy=login]').click();

            cy.url().should('match', /login/)
        });

        it('can go to register', () => {
            cy.get('[data-cy=register]').click();

            cy.url().should('match', /register/)
        });
    });

    context('Logged user', () => {
        it('can go to login', () => {
            cy.get('[data-cy=login]').click();

            cy.url().should('match', /login/)
        });

        it('can go to register', () => {
            cy.get('[data-cy=register]').click();

            cy.url().should('match', /register/)
        });
    });

});

/// <reference types="cypress" />

context('Post', () => {
    beforeEach(() => {
        cy.visit('/author/1');
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

    it('can go back to the blog from the logo', () => {
        cy.get('[data-cy=logo]').click();

        cy.url().should('eq', Cypress.config().baseUrl +'/')
    });

    it('can go back to the blog from the home item', () => {
        cy.get('[data-cy=home-link]').click();

        cy.url().should('eq', Cypress.config().baseUrl +'/')
    });

    context('Pagination', () => {
        it('can go to the second page of the paginator', () => {
            cy.get('[data-cy=paginator-2]').click();

            cy.url().should('match', /\?page=2/)
        });

        it('can go to the first page of the paginator from the second page', () => {
            cy.get('[data-cy=paginator-2]').click();

            cy.url().should('match', /\?page=2/);

            cy.get('[data-cy=paginator-1]').click();

            cy.url().should('match', /\?page=1/);
        });

        it('can go to next page', () => {

            cy.get('[data-cy*=paginator]').its('length').then((size) => {
                cy.get('[data-cy=paginator-' + --size + ']').click();

                cy.url().should('match', /\?page=2/);
            });
        });

        it('can go to previous page', () => {
            cy.get('[data-cy=paginator-2]').click();

            cy.url().should('match', /\?page=2/);

            cy.get('[data-cy=paginator-0]').click();

            cy.url().should('match', /\?page=1/);
        });
    });

    context('Logged user', () => {

        beforeEach(() => {
            cy.login('admin@projectmark.com','admin');
        });

        it('can go to dashboard from the dropdown', () => {
            cy.visit('/');

            cy.get('[data-cy=dropdown-link]').contains('Dashboard').click({ force: true });

            cy.url().should('eq', Cypress.config().baseUrl + '/dashboard');
        });

        it('can go to posts from the dropdown', () => {
            cy.visit('/');

            cy.get('[data-cy=dropdown-link]').contains('Posts').click({ force: true });

            cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/posts');
        });

        it('can go to profile from the dropdown', () => {
            cy.visit('/');

            cy.get('[data-cy=dropdown-link]').contains('Profile').click({ force: true });

            cy.url().should('eq', Cypress.config().baseUrl + '/user/profile');
        });

        it('can logout from the dropdown', () => {
            cy.visit('/');

            cy.get('[data-cy=dropdown-link]').contains('Logout').click({ force: true });

            cy.get('[data-cy=login]').should('be.visible');
            cy.get('[data-cy=register]').should('be.visible');
        });
    });

});

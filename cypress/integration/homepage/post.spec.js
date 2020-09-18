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

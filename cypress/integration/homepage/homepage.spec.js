/// <reference types="cypress" />

context('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

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

    context('Post', () => {
        it('can go to a post from the post title', () => {
            cy.get('[data-cy=post-0-title]')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href);
                    cy.url().should('eq', Cypress.config().baseUrl + href);
                })
        });

        it('can go to a post from the post read more', () => {
            cy.get('[data-cy=post-0-read-more]')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href);
                    cy.url().should('eq', Cypress.config().baseUrl + href);
                })
        });
    });


});

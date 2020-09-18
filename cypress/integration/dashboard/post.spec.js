/// <reference types="cypress" />

context('Posts', () => {
    beforeEach(() => {
        cy.login('admin@projectmark.com','admin');
        cy.visit('/dashboard/posts');
    });

    it('can go to create posts page', () => {
        cy.get('[data-cy=create-posts-button]').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/posts/create');
    });

    it('can go to a post detail from the post table', () => {
        cy.get('[data-cy=post-detail-0] > a')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href);
                cy.url().should('eq', href);
            })
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

    context('Create Post', () => {

        beforeEach(() => {
            cy.visit('/dashboard/posts/create');
        });

        it('can create a new post', () => {
            cy.get('input[id=title]').type('New Post Title');

            cy.get('.trix-content').type('Post content');

            cy.get('[data-cy=publish-post]').click();

            cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/posts');

            cy.get('[data-cy=flash-message]').contains('Post created.')
        });

        it.only('title and description are required fields', () => {
            cy.get('[data-cy=publish-post]').click();

            cy.get('p').contains('The title field is required.');
            cy.get('p').contains('The description field is required.');
        });
    });
});

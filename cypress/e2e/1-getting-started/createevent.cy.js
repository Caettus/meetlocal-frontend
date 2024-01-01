describe('Create Event', () => {
    it('should create a new event and search for it', () => {
        // Visit the website
        cy.visit('https://example.com');

        // Fill in location details
        cy.get('#location-input').type('Eindhoven');
        cy.get('#country-input').type('Netherlands');

        // Click on the new event button
        cy.get('#new-event-button').click();

        // Fill in event details
        cy.get('#event-title-input').type('Random Event');
        cy.get('#event-description-input').type('This is a random event');
        cy.get('#event-date-input').type('2022-01-01');
        cy.get('#event-time-input').type('12:00 PM');

        // Submit the event form
        cy.get('#submit-event-button').click();

        // Search for the event
        cy.get('#search-bar').type('Random Event');
        cy.get('#search-button').click();

        // Assert that the event is found
        cy.get('.event-card').should('contain', 'Random Event');
    });
});

describe('Search Test', () => {
    it('should search for "Illegaal"', () => {
        cy.visit('http://localhost:8080/')

        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('Illegaal')

        cy.get('.row').find('.gatheringName').should('contain', 'Illegaal')
    })
})

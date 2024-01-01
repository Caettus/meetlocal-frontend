describe('Search Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
    it('should search for "Illegaal"', () => {

        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('Illegaal')

        cy.get('.row').find('.gatheringName').should('contain', 'Illegaal')
    })

    it('should search for "123456789" and not find anything', () => {
        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('123456789')

        cy.get('.row').find('.gatheringName').should('not.exist')
    })

    
})

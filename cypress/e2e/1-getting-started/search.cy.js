describe('Search Test', () => {
    it('should search for "Illegaal"', () => {
        cy.visit('http://localhost:8080/') // Replace with the actual website URL

        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('Illegaal')
        cy.get('#feedSearchButton').click()
    })
})

describe('Search Test', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://localhost:7031/api/gathering', { fixture: 'gatheringdata.json' }).as('getFeed')
        cy.intercept('POST', 'https://localhost:7031/api/location', { statusCode: 200 }).as('postRequest')
        cy.visit('http://localhost:8080')
    })

    it('should search for gatherings', () => {
        cy.fixture('gatheringdata.json').then((gatheringData) => {
            cy.get('#cityInput').type('Eindhoven')
            cy.get('#countryInput').type('Netherlands')
            cy.get('#locationSubmitButton').click()

            cy.wait('@postRequest').then(() => {
               
                cy.wait('@getFeed')
                cy.get('#feedSearchInput').type('Test')
                cy.get('.row').contains('.gatheringName', 'Test').should('exist')
            })
        })
    })

    it('should not find gatherings', () => {
        cy.fixture('gatheringdata.json').then((gatheringData) => {
            cy.get('#cityInput').type('Eindhoven')
            cy.get('#countryInput').type('Netherlands')
            cy.get('#locationSubmitButton').click()

            cy.wait('@postRequest').then(() => {
               
                cy.wait('@getFeed')
                cy.get('#feedSearchInput').type('ditisgeenbestaandegathering')
                cy.get('.row').contains('.gatheringName').should('not.exist')
            })
        })
    })
})

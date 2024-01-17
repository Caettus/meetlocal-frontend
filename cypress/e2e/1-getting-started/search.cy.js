import { cy, describe } from 'cypress';
import { it } from 'cypress';
import { beforeEach } from 'cypress';

describe('Search Test', () => {
    beforeEach(() => {
        cy.server()
        cy.route('GET', '/api/gathering', 'fixture:gatheringdata.json')
    })

    it('should search for "Test"', () => {
        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('Test')

        cy.get('.row').find('.gatheringName').should('contain', 'Test')
    })

    it('should search for "123456789" and not find anything', () => {
        cy.get('#cityInput').type('Eindhoven')
        cy.get('#countryInput').type('Netherlands')
        cy.get('#locationSubmitButton').click()

        cy.get('#feedSearchInput').type('123456789')

        cy.get('.row').find('.gatheringName').should('not.exist')
    })
})

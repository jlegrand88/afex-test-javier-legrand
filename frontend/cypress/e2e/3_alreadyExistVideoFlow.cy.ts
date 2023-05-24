// https://on.cypress.io/api

describe('Already exist video when try to submit testing', () => {
  it('visits the app root url', () => {
    cy.viewport('macbook-16')
    cy.visit('/')
    cy.request('https://quwnhu3hf8.execute-api.us-east-2.amazonaws.com/test/video-list')
    cy.screenshot('(already-exist-flow)1-home-view', { capture: 'runner'})
    cy.contains('label', 'Añadir nuevo video')
    cy.get('input#inputAdd').should('have.attr', 'placeholder', 'Añadir')
    cy.get('input.button').should('have.attr', 'value', 'Añadir')
    cy.get('input#inputAdd').type('https://youtu.be/EqWfZspNY3c')
    cy.screenshot('(already-exist-flow)2-type-url', { capture: 'runner'})
    cy.get('input.button').click()
    cy.screenshot('(already-exist-flow)3-submit-click', { capture: 'runner'})
    cy.get('.notice-container').contains('div','La URL ingresada ya se encontraba registrada, no es posible guardarla dos veces!')
    cy.get('.modal').screenshot('(already-exist-flow)4-error-message', { capture: 'runner'})
  })
})

// https://on.cypress.io/api

describe('Success video submit testing', () => {
  it('visits the app root url', () => {
    cy.viewport('macbook-16')
    cy.visit('/')
    cy.request('https://quwnhu3hf8.execute-api.us-east-2.amazonaws.com/test/video-list')
    cy.screenshot('(add-video-flow)1-home-view', { capture: 'runner'})
    cy.contains('label', 'Añadir nuevo video')
    cy.get('input#inputAdd').should('have.attr', 'placeholder', 'Añadir')
    cy.get('input#inputAdd').type('https://www.youtube.com/watch?v=EqWfZspNY3c')
    cy.screenshot('(add-video-flow)2-type-url', { capture: 'runner'})
    cy.get('input.button').should('have.attr', 'value', 'Añadir')
    cy.get('input.button').click()
    cy.screenshot('(add-video-flow)3-submit-click', { capture: 'runner'})
    cy.get('.notice-container').contains('div','El video ha sido guardado!')
    cy.get('.modal').screenshot('(add-video-flow)4-success-message', { capture: 'runner'})
  })
})

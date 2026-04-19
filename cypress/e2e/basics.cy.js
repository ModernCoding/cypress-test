/// <reference types="cypress" />

describe ('visit website', () => {
  // cy.visit ('https://www.saucedemo.com/v1/')
  // cy.visit ('https://www.saucedemo.com/')
  // cy.url().should('include', 'saucedemo')
  beforeEach ('Visit the webpage', () => {
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm')
  })
  afterEach ('Clean up after test', () => {
    cy.log ('Test completed')
  })
  it ('Visit the website', () => {
    cy.get ('.logo').should ('be.visible')
    cy.get ('.caption').should ('have.text', 'Experience the difference')
  })
})
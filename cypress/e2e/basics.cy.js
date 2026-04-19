/// <reference types="cypress" />

describe ('visit website', () => {
  it ('Visit the website', () => {
    // cy.visit ('https://www.saucedemo.com/v1/')
    // cy.visit ('https://www.saucedemo.com/')
    // cy.url().should('include', 'saucedemo')
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm')
    cy.get ('.logo').should ('be.visible')
    cy.get ('.caption').should ('have.text', 'Experience the difference')
  })
})
/// <reference types="cypress" />

describe ('visit website', () => {

  beforeEach ('Visit the webpage', () => {
    
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm')

    // id locator
    cy.get ("#mainPanel")

    // class locator
    cy.get (".caption")

    // attribute locator
    cy.get ("input[name='username']")
  
  })
  

  afterEach ('Clean up after test', () => {
    cy.log ('Test completed')
  })
  
  it ('Visit the website', () => {
    cy.get ('.logo').should ('be.visible')
    cy.get ('.caption').should ('have.text', 'Experience the difference')
  })

})
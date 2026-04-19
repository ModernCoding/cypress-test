/// <reference types="cypress" />

describe ('common locator types', () => {

  it ('list of common locator types', () => {
    
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm')

    // id locator
    cy.get ("#mainPanel")

    // class locator
    cy.get (".caption")

    // attribute locator
    cy.get ("input[name='username']")
    cy.get ("input[name='password']")
    cy.get ("input[type='submit']").click ()

    // condition locator, if ".toto" is present, log "toto is present", else log "toto is not present"
    cy.get ("body").then ($body => {
      if ($body.find (".toto").length > 0) {
        cy.log ("toto is present")
      } else {
        cy.log ("toto is not present")
      }
    })
    

  })

})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  /// <refrence types="Cypress"/>
  /// <reference types="cypress-xpath"/>

  //custom command for clicking on link using label

  Cypress.Commands.add('clickLink', (label) => {
    cy.get('a', { timeout: 10000 })
      .contains(label)
      .should('exist') // Ensure the element exists
      .click();
  });

  //overwrite the contains command

  /*Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {
    // determine if a filter argument was passed
    if (typeof text === 'object') {
      options = text;
      text = filter;
      filter = undefined;
    }
    options.matchCase = false;
  
    // Call the original 'contains' function with updated arguments
    return originalFn(subject, filter, text, options);
  });*/

  //custom commands for login

  Cypress.Commands.add("loginapp",(email,password)=>{

    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('.button-1.login-button').click();

    //customized command for iframe

    Cypress.Commands.add("getIframe",(iframe)=>{

    return cy.get(iframe)
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);
    })


  })
   
  

//click on link using label
//over writing existing contains () command
//re-usable custom commands

//const { should } = require("chai");


describe('customcommands',()=>{

it('handling links',()=>{

    //direct click on link without using custom command

   /* cy.visit("https://demo.nopcommerce.com/")
    cy.get('.ico-register').click();
    cy.get('.page-title').should('have.text','Register');*/

    //by using the custom command which already decaled in commands.js file name of the command is clicklink
   /* cy.visit("https://demo.nopcommerce.com/")
    cy.clickLink('Register');
    cy.get('.page-title').should('have.text','Register')*/



})

it('over writing existing commands',()=>{
  
    //by using the custom command which already decaled in commands.js file name of the command is clicklink
    cy.visit("https://demo.nopcommerce.com/")
    cy.clickLink('REGISTER');           //case sensitive
    cy.get('.page-title').should('have.text','Register')

})

//login by using the customized command in commands file under suuport folder

it.only('Login command',()=>{

cy.visit("https://demo.nopcommerce.com/");
cy.wait(5000);
    cy.clickLink("Log in");
    cy.loginapp("shiva123@gmail.com","Shiva@123");
    cy.get('.ico-account').should('have.text','My account');

})

})


describe("navigation",()=>{

it.only('Navigationtest',()=>{
    cy.visit("https://demo.nopcommerce.com/");
    cy.title().should('eq',"nopCommerce demo store");

    cy.get('ul[class="top-menu notmobile"] li:nth-child(5) a:nth-child(1)').click();
    cy.get('div[class="block block-category-navigation"] strong').should('have.text','Categories');

    cy.go('back');  //go back to home page
    cy.title().should('eq',"nopCommerce demo store");

    cy.go('forward');   //forword
    cy.get('div[class="block block-category-navigation"] strong').should('have.text','Categories');


    cy.go(-1);  //home
    cy.title().should('eq',"nopCommerce demo store");

    cy.go(1);
    cy.get('div[class="block block-category-navigation"] strong').should('have.text','Categories');

    cy.reload();

})

it('',()=>{



})

it('',()=>{


})

it('',()=>{


})



})
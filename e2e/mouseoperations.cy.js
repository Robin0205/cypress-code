import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe("mouseoperations",()=>{

    it('MouseHover',function(){

        cy.visit("https://demo.opencart.com/");
        cy.get("div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item.dropdown:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a.nav-link")
          .should('not.be.visible');
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        
        cy.get("div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item.dropdown:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a.nav-link")
          .should('be.visible');

    });

it('Right Click',function(){
    //Approach-1

    /*cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
    cy.get('.context-menu-icon-copy > span').should('be.visible')*/

    //Approach-2

    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get('.context-menu-icon-copy > span').should('be.visible')



});

it('Double Click',function(){

  cy.visit("");
  cy.frameLoaded('') //load the frame

  //Approach-1
  cy.iframe('').find('').dblclick();
  cy.iframe('').find('').should('have.value','Hello world!');
  

  //Approach-2
  cy.iframe('').find('').tigger('dbclick');
  cy.iframe('').find('').should('have.value','Hello world!');


    
});

it('Drag and Drop using plugin',function(){
  // to do drag and drop action we need to insatll one plugin from website(drag and drop plugin for cypress) in terminal and later
  // we need to add in the same file with command like require()

 cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
 cy.get('#box7').should('be.visible')
 cy.get('#box106').should('be.visible')


 cy.wait(3000);
 cy.get('#box7').drag('#box106',{force:true})
  
});

it.only('scrool-options',()=>
{

  cy.visit("https://data.worldbank.org/country")
  cy.get('a[href="/country/gabon?view=chart"]').scrollIntoView({duration:2000})
  cy.get('a[href="/country/gabon?view=chart"]').should('be.visible')
  cy.wait(5000)
  cy.get('._bottom').scrollIntoView()

})


})
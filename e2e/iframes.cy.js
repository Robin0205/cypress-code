
import 'cypress-iframe';

describe("iframes",function(){


    it('iframe-approach1-by using cypress command',function(){

  cy.visit("https://the-internet.herokuapp.com/iframe");
  cy.get("div[aria-label='Close'] svg").click();

  const iframe=cy.get("#mce_0_ifr")
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);

  iframe.clear().type("welcome{cmd+a}");       //to do the bold format to the inserted word
  cy.get("[aria-lable='Bold']").click();

})
// we can do it by creating our customized command also in support ---commands.js file 
//we have to write  our customized command first over there


it('iframe-approach2-by using custom command',function(){

  cy.visit("https://the-internet.herokuapp.com/iframe");
  cy.get("div[aria-label='Close'] svg").click();
  cy.getIframe('#mce_0_ifr').clear().type("welcome{cmd+a}");   //to do the bold format to the inserted word
  cy.get("[aria-lable='Bold']").click();

  
})

//handling iframes by using plugin which is available in (cypress iframes npm )-type in browser and take plugin() and install in cypress
//after that we have  to add the commad in same file (import import 'cypress-iframe')

it.only('iframe-approach3-by using cypress plugin command',function(){

  cy.visit("https://the-internet.herokuapp.com/iframe");
  cy.get("div[aria-label='Close'] svg").click();
  cy.frameLoaded('#mce_0_ifr'); //load the frame
  cy.iframe('#mce_0_ifr').clear().type("welcome")  //to do the bold format to the inserted word
  //cy.get("[aria-lable='Bold']").click();

  
})
})
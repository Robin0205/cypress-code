describe("checkboxes",function()
{


it("checking check boxes",function()

{
  cy.visit("https://testautomationpractice.blogspot.com/")
  
   //Visibility of radio buttons

   /*cy.get("input#male").should('be.visible')
   cy.get("input#female").should('be.visible')


   //selecting radio buttons

   cy.get("input#male").check().should('be.checked')
   cy.get("input#female").should('not.be.checked')


   cy.get("input#female").check().should('be.checked')
   cy.get("input#male").should('not.be.checked')*/




   //visibility of element

   //cy.get("#sunday").should('be.visible')

   //selecting single check box-sunday
   
   //cy.get("#sunday").check().should('be.checked')

   //unselecting check box
   //cy.get("#sunday").uncheck().should('not.be.checked')

   //selecting checkboxes 

   //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
   //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')



   //select the first and last check box

   cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
   cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

})


})
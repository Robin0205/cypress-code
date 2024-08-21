describe("dropdowns",function(){

it.skip("dropdown with select",function(){

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.xpath("//*[@id='select2-billing_country-container']").select('India').should('have.value','India')

})

it("dropdown without select",function(){

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.xpath("//*[@id='select2-billing_country-container']").type('India').type('{enter}')
    cy.xpath("//*[@id='select2-billing_country-container']").should('have.text','India')

})



})
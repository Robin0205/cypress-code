
describe("autosuggestions",function(){

it.skip("Auto suggestion",function()
{

    cy.visit("https://www.wikipedia.org/")
    cy.get("#searchInput").type('Japan')
    cy.get(".suggestion-highlight").contains("Japan").click()
    cy.get(".mw-page-title-main").should('have.text','Japan')


})

it("dynamic dropdown",()=>{
    
cy.visit("https://www.google.co.in/")
cy.get("#APjFqb").type('cypress')
cy.wait(3000)

cy.get('.wM6W7d>span').each(($el,index,$list)=>{

if($el.text()=='cypress automation')

{
    cy.wrap($el).click()
}

})

cy.get("#APjFqb").should('have.value','cypress automation')

})
})

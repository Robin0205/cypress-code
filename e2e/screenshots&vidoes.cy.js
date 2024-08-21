
//By default cypress will  take scrrenshot and records vidoes when we will execute tests through CLI 
//if we want to take screenshots through cypress while executing tests we need to use commands cy.screenshot("name of the file")
describe("screenshots&vidoes.cy.js",()=>{
    
it.only('captures scrrenshot & vidoes ',()=>{

    cy.visit("https://demo.nopcommerce.com/");
    cy.screenshot("home page");
})




})
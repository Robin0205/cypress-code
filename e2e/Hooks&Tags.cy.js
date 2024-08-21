
//Before----this hook will execute only once
//After---this hook will execute only once
//Beforeeach---this hook will execute every time before each test execute
//Aftereach---this hook will execute every time after each test execute

describe("Hooks&Tags",()=>
{
    before(()=>{
        cy.log("******Launch app*****")
    })

    after(()=>{
        cy.log("******closeapp*****")  
    })

    beforeEach(()=>{
        cy.log("*******Login***********")
    })

    afterEach(()=>{
        cy.log("*******Logout***********") 
    })

    it('search',()=>{

        cy.log("*******Search***********") 
    })

    it('Advanced search',()=>{

        cy.log("*******Advanced search***********") 

    })

    it('listing products',()=>{

        
        cy.log("*******listing products***********") 
    })









})
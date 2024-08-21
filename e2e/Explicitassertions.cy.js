describe("Explicitassrtions",function(){

 // To see all the explicit assertions go to cypress page and see bdd andd tdd assertions
    it("Explicit",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()

             let expname="xyz";

             cy.get('.oxd-userdropdown-name').then(   (x)=>{

                   let actualname=x.text()

                   //BDD Style
                   expect(actualname).to.equal(expname)
                   expect(actualname).to.not.equal(expname)


                   //TDD style
                   assert.equal(actualname,expname)
                   assert.not.equal(actualname,expname)

             })

        

    })
})
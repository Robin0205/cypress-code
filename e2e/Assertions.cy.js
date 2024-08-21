

describe("Assertions",function() {


    it("Implicit assertions", function() {
      //Should and 

        /*cy.visit("https://www.meesho.com/accessories-men/pl/3tp")
        cy.url().should('include','meesho.com')
        cy.url().should('eq','https://www.meesho.com/accessories-men/pl/3tp')
        cy.url().should('contain','meesho')*/

        //instead of using url everytiem we can use should followed by should command
         

        /*cy.visit("https://www.meesho.com/accessories-men/pl/3tp")
        cy.url().should('include','meesho.com')
        .should('eq','https://www.meesho.com/accessories-men/pl/3tp')
        .should('contain','meesho')*/

      //instead of using should everytiem we can use and keyword followed by should command  (Contunation of multipple assertions)

       /* cy.visit("https://www.meesho.com/accessories-men/pl/3tp")
        cy.url().should('include','meesho.com')
        .and('eq','https://www.meesho.com/accessories-men/pl/3tp')
        .and('contain','meesho')*/

        //by using non contain command inside should assertion    
        /*cy.visit("https://www.meesho.com/accessories-men/pl/3tp")
        cy.url().should('include','meesho.com')
        .and('eq','https://www.meesho.com/accessories-men/pl/3tp')
        .and('not.contain','meesho123')*/



        //By using (should)(and)assrtions on element

        /*cy.visit("https://www.meesho.com/")
        cy.get("[alt='Meesho Logo']").should('be.visible').and('.exist')*/  //Logo visible and exist


        //To know overall no of links
        /*cy.visit("https://www.meesho.com/")
        cy.xpath("//a").should('have.length','504')*/



        /*cy.visit("https://www.flipkart.com/")
        cy.get("[placeholder='Search for Products, Brands and More']").type("laptop")
        cy.get("[placeholder='Search for Products, Brands and More']").should('have.value','laptop')*/
        

    })

})
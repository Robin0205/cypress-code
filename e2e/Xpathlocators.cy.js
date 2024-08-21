describe('Xpathlocators',function(){

    it("find no of products",function() {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")   
        cy.xpath("//ul[@class='product_list grid row']/li") .should('have.length',7)             //Assertion
    })

    it("chained xpath",function() {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category")   
        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length',7)             //Assertion
    })
    
    })
describe("childtabs",function(){


    //cypress can not handle the child windows so we have to open the new tab in curent tab then we can perform actions on it
it('Approach-1',()=>
{

    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get('.example>a').invoke('removeAttr','target').click();     //we gave to remove target attribute to open the new tab in same window (here a is the child class of div tag) 
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(5000);
    

    //operations
    cy.go('back'); //back to parent tab

})


it.only('Approach-2',()=>
    {
    
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((e)=>{
           let url=e.prop('href');
           cy.visit(url);
        })
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(5000);

        //operations
        cy.go('back'); //back to parent tab
    
    })


})
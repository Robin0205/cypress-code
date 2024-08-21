//To do the DDT testing the data should be stored in fixtures file

describe("DDT",()=>{

    //Direct access
   /* it('direct access',()=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get('input[placeholder="Username"]').type('Admin');
      cy.get('input[placeholder="Password"]').type('admin123');
      cy.get('button[type="submit"]').click();


      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })*/
    

  /*it('FixturesDemotest-1',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.fixture('orangehrm').then((data)=>{


      cy.get('input[placeholder="Username"]').type(data.username);
      cy.get('input[placeholder="Password"]').type(data.password);
      cy.get('button[type="submit"]').click();


      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)

    })*/

    //Access through hooks---for multiple blocks

   /* let userdata;
    before('orangehrmdata',()=>{                          //these are the hooks
      cy.fixture("orangehrm").then((data)=>{
        userdata=data;
      })

    })*/

    /*it('FixturesDemotest-2',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
        cy.get('input[placeholder="Username"]').type(userdata.username);
        cy.get('input[placeholder="Password"]').type(userdata.password);
        cy.get('button[type="submit"]').click();
  
  
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)
  
      })*/


        it('Data Driven Test',()=>{

     cy.fixture("orangehrm2").then((data)=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      data.forEach((userdata)=>{

        cy.get('input[placeholder="Username"]').type(userdata.username);
          cy.get('input[placeholder="Password"]').type(userdata.password);
          cy.get("button[type='submit']").click();
    
         if(userdata.username=='Admin'&& userdata.password=='admin123')
          {
           cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected) //PIM validation
           cy.get('.oxd-userdropdown-name').click();  //logout
           cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click();
          }

         else {
          cy.get('.oxd-alert-content.oxd-alert-content--error').should('have.text',userdata.expected) 

         }
    

     })
      
      
  })
})
})

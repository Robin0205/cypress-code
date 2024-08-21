import Login from "../pageobjects.loginpage.js" //to imprt methods from page object we need to write this command here

describe ('loginwithpom',()=>{

//general approach
it.only('login',()=>
{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
   
})

//pom approach
it('login-2',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       
       const ln=new Login();
       ln.setUseNam("Admin");
       ln.setPassword("admin123");
       ln.clicksubmit();
       
    })


    //using pom with fixtures

    it('login-3',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixtures('orangehrm').then((data)=>{
            const ln=new Login();
            ln.setUseNam(data.username);
            ln.setPassword(data.setPassword);
            ln.clicksubmit();


      


      })

    })


})
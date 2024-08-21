
describe('My First Test', () =>{

    it('verify title-positive ',() => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       cy.title().should('eq','OrangeHRM');
       
  
    })

    it('verify title-negarive ',() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.title().should('eq','OrangeHRM123');
      
      //After executing the test reports.html is created in project folder just refresh the project and
      //right click on it and copy the file path and open in browser then u can see the reports of a particular file 
   })
   
  })
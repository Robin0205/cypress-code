describe("Alerts",function()
{
    //Java script Alert :it will have some text and an ok button
    //Java script confirm Alert:it will have some text with ok and cancel button
    //Java script Prompt Alert :it will have some text with a text box for user input along with ok
    //Authenticated Alert :


    //we no need to write any scripts to handle alerts cypress alone it will handle alerts bt we need to do some validations on it
    //By using the events we need to trigger the events by using some methods  that are provided by cypress in its official page we
    // can do validations on alerts

    it('js alert',()=>{
       //--------------------------------1-----------------------------------
          cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
          cy.get("button[onclick='jsAlert()']").click();


          cy.on('window:alert',(t)=>{          //window :alert is a event and in t that event is stored

            expect(t).to.contains('I am a JS Alert');
          })

          //Alert winodow automatically closed by cypress

          cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('js alert-ok',()=>{
        //--------------------------------1-----------------------------------
           cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
           cy.get("button[onclick='jsConfirm()']").click();
 
 
           cy.on('window:confirm',(t)=>{
 
             expect(t).to.contains('I am a JS Confirm');
           })
 
           //cypress automatically closed alet window by using ok button default
           //cy.on('window:caonfirm',()=>false);   cypress will close alert window by using closing button
 
           cy.get('#result').should('have.text','You clicked: Ok')
 
     })

     it('js alert-prompt',()=>{
        //--------------------------------1-----------------------------------
           cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
           

           cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

           })

           cy.get("button[onclick='jsPrompt()']").click();

           //cypress automatically close propmpted alert---it will use ok button-by deafault
           //cy.on('window:caonfirm',()=>false);   cypress will close alert window by using closing button
           cy.get('#result').should('have.text','You entered: welcome')
 
 
            
 
     })

     
     it.only('basic auth',()=>{
        //--------------------------------1-----------------------------------
           cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
             {
            username : "admin",
            password: "admin"}
                                                            });

        cy.get('div[class="example"] p').should('have.contain','Congratulations')                                              
           

     })


 
 



})
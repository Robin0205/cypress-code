class Login 
{  txtusername="input[placeholder='Username']";
  txtpassword="input[placeholder='Password']";
  submitbutton="button[type='submit']";



          setUseName(Username)
          {
            cy.get(this.txtusername).type(username);
          }
           
          setPassword(password)
          {
            cy.get("input[placeholder='Password']").type(password);
          }

          clicksubmit()
          {
            cy.get("button[type='submit']").click();
          }
          
 
}

export default Login;
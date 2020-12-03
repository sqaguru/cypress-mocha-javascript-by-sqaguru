class LoginPage{
getUserName(){

    return cy.get("#txtUsername")
}

getPassword(){

   return cy.get("#txtPassword")
}

getLogin(){

    return cy.get("#btnLogin")
}
}
export default LoginPage

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"


Given('User sent the request for get multiple user list', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')

})

Then('User list should be displayed', ()=>{
    cy.get('@getUsers').then((response)=>{
        cy.log(response)
        expect(response.status).to.eql(200)
        expect(response.statusText).to.eql('OK')
    })

})
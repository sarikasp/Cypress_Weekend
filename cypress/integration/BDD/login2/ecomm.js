import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Visit Orange HRM Site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})


And("Enter the Username & Password", (dataTables) => {
    dataTables.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.Username)
        cy.get('[name="password"]').type(element.Password)
    })
})

When('Click on login button', () => {
    cy.get('[type="submit"]').click()
})

Then('Valid the Dashboard', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
})


Given("Visit Practice Automation Site", () => {
    cy.visit("https://practice.automationtesting.in/my-account/")
})

And("Login with {string} & {string}", (username, password) => {
    cy.get("#username").type(username)
    cy.get('#password').type(password)
})
When("Click on Submit button", () => {
    cy.get('[value="Login"]').click()
})

Then("Dashboard should be visible", () => {
    cy.get('.is-active> a').should('have.text', 'Dashboard')
})
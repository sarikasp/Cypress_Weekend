import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('Visit Orange HRM Site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

And('Enter the Username', () => {
    cy.get('[name="username"]').type('Admin')
})

And('Enter the Password', () => {
    cy.get('[name="password"]').type('admin123')
})

When('Click on login button', () => {
    cy.get('[type="submit"]').click()
})

Then('Valid the Dashboard', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
})


And('Enter the invalid Username', () => {
    cy.get('[name="username"]').type('Admin12')
})

And('Enter the invalid Password', () => {
    cy.get('[name="password"]').type('admin12321')
})


Then("Valid the Error message", ()=>{
cy.get(".oxd-alert-content-text").should('have.text', "Invalid credentials")
})
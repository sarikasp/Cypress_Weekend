import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

let id;
Given('User sent the request for get multiple user list', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')

})

Then('User list should be displayed', () => {
    cy.get('@getUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eql(200)
        expect(response.statusText).to.eql('OK')
    })

})

Given('User sent the request for create user using {string} and {string}', (name, job) => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            "name": name,
            "job": job
        }
    }).as('createUsers')

})

Then('User should be created with {string} and {string}', (name, job) => {
    cy.get('@createUsers').then((response) => {
        id = response.body.id
        cy.log(response)
        expect(response.status).to.eql(201)
        expect(response.statusText).to.eql("Created")
        expect(response.body.name).to.eql(name)
        expect(response.body.job).to.eql(job)
        cy.log(id)
    })

})


Given('User sent the request for update user using {string} and {string}', (name, job) => {
    cy.request({
        method: 'PUT',
        url: `https://reqres.in/api/users/${id}`,
        body: {
            "name": name,
            "job": job
        }
    }).as('updateUsers')

})

Then('User should be updated with {string} and {string}', (name, job) => {
    cy.get('@updateUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eql(200)
        expect(response.statusText).to.eql("OK")
        expect(response.body.name).to.eql(name)
        expect(response.body.job).to.eql(job)
    })

})
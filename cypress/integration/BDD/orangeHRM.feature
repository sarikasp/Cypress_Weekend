Feature: Ecommerce Site: Orange HRM

    Scenario: Login with Valid Credentilas
        Given Visit Orange HRM Site
        And Enter the Username
        And Enter the Password
        When Click on login button
        Then Valid the Dashboard

    Scenario: Login with Invalid Credentials
        Given Visit Orange HRM Site
        And Enter the Username
        And Enter the Password
        When Click on login button
        Then Valid the Error message

Feature: Ecommerce Site: Orange HRM

    # Scenario: Login with Valid Credentilas
    #     Given Visit Orange HRM Site
    #     And Enter the Username & Password
    #         | Username | Password |
    #         | Admin    | admin123 |
    #     When Click on login button
    #     Then Valid the Dashboard


    Scenario Outline: Login with Valid Credentials on Practice Automation Site
        Given Visit Practice Automation Site
        And Login with "<username>" & "<password>"
        When Click on Submit button
        Then Dashboard should be visible

        Examples:
            | username        | password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | pratik@test.com | @Minskole12 |



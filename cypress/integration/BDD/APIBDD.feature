Feature: Regress API

    Scenario: GET list of user using API
        Given User sent the request for get multiple user list
        Then User list should be displayed



    Scenario Outline: Create user using POST request
        Given User sent the request for create user using "<name>" and "<job>"
        Then User should be created with "<name>" and "<job>"

        Examples:
            | name    | job     |
            | Gauri   | Tester  |
            | Chinmay | QA_Lead |

    Scenario Outline: Create user using PUT request
        Given User sent the request for update user using "<name>" and "<job>"
        Then User should be updated with "<name>" and "<job>"

        Examples:
            | name   | job     |
            | Juhi   | Tester  |
            | Prisha | QA_Lead |
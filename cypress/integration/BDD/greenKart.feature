Feature: Ecommerce Site: Green Kart

    Scenario: E-Commerce Product Delivery
        Given Visit Green-Kart Site
        And Seach Product which is start from ca
        When Add Carrot to the cart
        And Place order and select country
        Then Validate the Thank you message
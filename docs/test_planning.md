# Test Plan

This testing plan is for the Sauce Demo Shopfront application. The minimum outcome is to determine test scenarios for next steps.

## Application under Test

[https://www.saucedemo.com/](https://www.saucedemo.com/)

## E2E Tool Selection

[E2E Automated Test Tooling Assessment](tool_selection.md)

## Folder Structure

`.idea` directory contains source of exercise

`docs` directory contain documentation created for this exercise

- [E2E Tooling Selection Assessment](docs/tool_selection.md)
- [Shopfront Test Plan Example](docs/test_planning.md)

`examples` directory is used to save commonly used templates and any boilerplate code created by initialising

`lib`directory contain various helpers for tests

`pages` directory contain locators and custom commands for each page under test

- [Playwright - Best Practises](https://playwright.dev/docs/best-practices)
- [Playwright - Writing Tests](https://playwright.dev/docs/writing-tests)
## Test Deliverables

- Tool Assessment Info [#2](https://github.com/tooniez/shopfront-e2e-exercise/issues/2)
- Test Plan [#3](https://github.com/tooniez/shopfront-e2e-exercise/issues/3)
- Test Scripts 
- Test Report [#11](https://github.com/tooniez/shopfront-e2e-exercise/issues/11)


## Features to be Tested:

1. User Login: [#10](https://github.com/tooniez/shopfront-e2e-exercise/issues/10)

- Verify that a registered user can successfully login to the application using valid credentials.
- Verify that an error message is displayed if incorrect credentials are entered.

2. Product Browsing and Cart: [#14](https://github.com/tooniez/shopfront-e2e-exercise/issues/14)

- Verify that a user can browse the available products on the application.
- Verify that a user can add products to the cart.
- Verify that the correct products are added to the cart.
- Verify that the quantity of products in the cart is updated correctly.
- Verify that a user can remove products from the cart.
- Verify that the cart is empty after removing all products.

3. Checkout Process:

- Verify that a user can navigate to the checkout page after adding products to the cart.
- Verify that the total price of the products in the cart is calculated correctly.
- Verify that a user can provide shipping and billing information.
- Verify that a user can complete the checkout process.

### Analysis:

Login Functionality: This is a critical functionality that needs to be thoroughly tested as it is the starting point for most user interactions.

Search Functionality: Since this is a shopping application, the ability to search for products is crucial. Testing this functionality will ensure the accuracy of the search results.

Add to Cart Functionality: The add to cart functionality is essential for a shopping application. Testing this functionality will help ensure that products are added correctly and the cart displays the correct total amount.

Checkout Functionality: This functionality is crucial to the conversion process. Testing this functionality will help ensure that users can successfully complete their purchases.

# Additional Information

If you have any questions or need clarifications, feel free to reach out in this repository or this [ama](http://github.com/tooniez/ama) 📧

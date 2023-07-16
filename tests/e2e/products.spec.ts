// Products/Cart test case
import { test } from '@playwright/test';
import { LoginPage } from '@pages/login';
import { Products } from '@pages/products';

test.beforeEach(async ({ page }) => {
  // Create a new instance of the LoginPage

  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.goto();
  await loginPage.verifyPagePresent();
  await loginPage.LoginWithCredentials('standard_user', 'secret_sauce');
});

test.describe('Product/Cart', () => {
  test('Cart should be empty be default', async ({ page }) => {
    // Create a new instance of the ProductsPage
    const productsPage = new Products(page);

    // Verify that the cart is empty be default
    await productsPage.verifyCartEmpty();
  });

  test('should contain Add to Cart', async ({ page }) => {
    // Create a new instance of the ProductsPage
    const productsPage = new Products(page);

    // Add an item to the cart
    await productsPage.addItemtoCart();

    // Verify that the item was added
    await productsPage.verifyItemAdded();
  });

  test('Cart should contain count when product is added', async ({ page }) => {
    // Create a new instance of the ProductsPage
    const productsPage = new Products(page);

    // Add an item to the cart
    await productsPage.addItemtoCart();
    // Verify that count notification
    await productsPage.verifyCartCount();
  });
});


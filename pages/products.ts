//products page object
import { expect, type Locator, type Page } from '@playwright/test';

export class Products {
  readonly page: Page;

  // Locators for the elements on the page
  readonly AddToCartButton: Locator;
  readonly CartItem: Locator;
  readonly Checkout: Locator;

  constructor(page: Page) {
    this.page = page;

    // Set up the Locators based on the provided selectors
    this.CartItem = page.locator('a').filter({ hasText: '1' });
    this.AddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.Checkout = page.locator('[data-test="checkout"]');
  }

  // Custom commands for products page
  async addItemtoCart() {
    await this.CartItem.first().click();
  }

  async verifyItemAdded() {
    await expect(this.CartItem).toBeVisible();
  }

  async checkoutCart() {
    await this.Checkout.first().click();
  }

  async verifyCheckout() {
    await expect(this.Checkout).toBeVisible();
  }

  async verifyCart() {
    await expect(this.CartItem).toBeVisible();
  }
}

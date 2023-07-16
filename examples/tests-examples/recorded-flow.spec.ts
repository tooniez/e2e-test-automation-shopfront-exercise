import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Products').click();
  await page.locator('.inventory_list').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.getByText('Your Cart').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Tony');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Luu');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('5095');
  await page.locator('[data-test="continue"]').click();
  await page.locator('#checkout_summary_container').click();
  await page.locator('[data-test="finish"]').click();
  await page
    .getByRole('heading', { name: 'Thank you for your order!' })
    .click();
  await page
    .getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get',
    )
    .click();
  await page.locator('[data-test="back-to-products"]').click();
});

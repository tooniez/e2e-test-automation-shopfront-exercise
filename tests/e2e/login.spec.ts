// Logon test case
import {test} from '@playwright/test';
import {LoginPage} from '@pages/login';

test('Logon - Log on as Standard User', async ({page}) => {
  // Create a new instance of the LoginPage
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.goto();
  await loginPage.verifyPagePresent();
  await loginPage.LoginWithCredentials('standard_user', 'secret_sauce');

  // Initial verify that the user is logged in
  await page.getByText('Swag Labs').click();
  await page.locator('.inventory_list').click();
});

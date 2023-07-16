// Logon test case
import { test } from '@playwright/test';
import { LoginPage } from '@pages/login';

test('Logon - Log on as Standard User', async ({ page }) => {
  // Create a new instance of the LoginPage
  const loginPage = new LoginPage(page);
  
});

//login page object
import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Locators for the elements on the page
  readonly Username: Locator;
  readonly Password: Locator;
  readonly LogonButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Set up the Locators based on the provided selectors
    this.Username = page.locator('[data-test="username"]');
    this.Password = page.locator('[data-test="password"]');
    this.LogonButton = page.locator('[data-test="login-button"]');
  }

  // Navigate to the root URL ("/")
  async goto() {
    await this.page.goto("/");
  }

  // Verify that the page is present
  async verifyPagePresent() {
    // Check if the LogonButton is visible
    await expect(this.LogonButton).toBeVisible();
  }

  // Login with the provided username and password
  async LoginWithCredentials(username: string, password: string) {
    // Fill in the Username and Password fields
    await this.Username.fill(username);
    await this.Password.fill(password);

    // Click on the first LogonButton element
    await this.LogonButton.first().click();
  }
}

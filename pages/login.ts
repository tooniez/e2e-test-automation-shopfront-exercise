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
  }
  }
}

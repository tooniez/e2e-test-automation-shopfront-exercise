//login page object
import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  }
}

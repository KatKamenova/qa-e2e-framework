import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly formAuthLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formAuthLink = page.getByRole("link", { name: "Form Authentication" });
  }

  async open() {
    await this.page.goto("/");
  }

  async goToLogin() {
    await this.formAuthLink.click();
  }
}

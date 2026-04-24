import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test(
  "Login successfully",
  { tag: ["@smoke", "@login", "@regression", "@sanity"] },
  async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("practice", "SuperSecretPassword!");

    await expect(loginPage.flashMessage).toBeVisible();
  },
);

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test(
  "Username & Password validation",
  { tag: ["@validation", "@regression"] },
  async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await page.goto("https://practice.expandtesting.com/login");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#flash")).toBeVisible();
  },
);

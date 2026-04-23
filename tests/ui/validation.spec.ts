import { test, expect } from "@playwright/test";

test("Username & Password validation", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator("#flash")).toBeVisible();
});

import { test, expect } from "@playwright/test";

test("Navigation to the login page", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/");
  await page.getByRole("link", { name: "Form Authentication" }).click();

  await expect(page).toHaveURL("https://practice.expandtesting.com/login");
});

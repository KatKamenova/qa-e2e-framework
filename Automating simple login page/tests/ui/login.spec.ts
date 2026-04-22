import { test, expect } from "@playwright/test";

test("Successful login with valid credentials", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
});

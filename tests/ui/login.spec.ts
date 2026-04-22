import { test, expect } from "@playwright/test";

test("Login successfully", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");

  await (page.locator("#username") as any).fill("admin");
});

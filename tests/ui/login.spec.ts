import { test, expect } from "@playwright/test";

test("Login successfully", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
  await page.getByRole("textbox", { name: "Username" }).fill("practice");
  await (page.getByRole("textbox", { name: "Password" }) as any).fill(
    "SuperSecretPassword!",
  );
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator("#flash")).toBeVisible();
});

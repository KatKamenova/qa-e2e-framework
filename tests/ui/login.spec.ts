import { test, expect } from "@playwright/test";

test(
  "Login successfully",
  { tag: ["@smoke", "@login", "@regression", "@sanity"] },
  async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("textbox", { name: "Username" }).fill("practice");
    await page
      .getByRole("textbox", { name: "Password" })
      .fill("SuperSecretPassword!");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#flash")).toBeVisible();
  },
);

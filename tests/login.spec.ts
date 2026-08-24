import {expect, test } from "@playwright/test";

test("login to hrm", async ({ page }) => {
  // Test code here
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

})
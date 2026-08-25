import {expect, test } from'@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { SidePanel, SideMenuOption } from '../components/SidePaneles'

test("login to hrm", async ({ page }) => {
  // Test code here
test.setTimeout(60000);

  const loginPanel = new LoginPage(page)
  await loginPanel.doLogin("Admin", "admin123")

  const sidePanel = new SidePanel(page)
  await sidePanel.clickOnOption(SideMenuOption.ADMIN)
  await sidePanel.clickOnOption(SideMenuOption.DASHBOARD)
  await sidePanel.clickOnOption(SideMenuOption.BUZZ)


})



test("login con contraseña incorrecta", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('contraseñaMala')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('alert')).toContainText('Invalid credentials')
})
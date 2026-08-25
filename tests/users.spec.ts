import { expect, test } from "@playwright/test"
import { LoginPage } from "../pageObjects/LoginPage"

test("Get all the usersnames registered", async ({ page }) => {
  // Test code here
  const loginPage = new LoginPage(page)
  await loginPage.doLogin('Admin', 'admin123')

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

  await (page.getByRole('link', {name: 'Admin'})).click()

  await (page.getByRole('navigation', {name: 'Topbar menu'})).getByText('User Management').click()
  await (page.getByRole('menuitem', {name: 'Users'})).click()

  const rows =  page.getByRole('table').getByRole('row')
  const usernames: string[] = []

  const rowCount = await rows.count()
  for (let i = 1; i < rowCount; i++) {
    const cell = rows.nth(i).getByRole('cell').nth(1)
    const username = await cell.textContent()
    
    if (username) {
    usernames.push(username)
    }
  }

  console.log(usernames)

})


test("Get all the employeenames registered", async ({ page }) => {
  // Test code here

  const loginPage = new LoginPage(page)
  await loginPage.doLogin('Admin', 'admin123')

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

  await (page.getByRole('link', {name: 'Admin'})).click()

  await (page.getByRole('navigation', {name: 'Topbar menu'})).getByText('User Management').click()
  await (page.getByRole('menuitem', {name: 'Users'})).click()

  const rows =  page.getByRole('table').getByRole('row')
  const employeenames: string[] = []

  const rowCount = await rows.count()
  for (let i = 1; i < rowCount; i++) {
    const cell = rows.nth(i).getByRole('cell').nth(3)
    const employeename = await cell.textContent()
    
    if (employeename) {
    employeenames.push(employeename)
    }
  }

  console.log(employeenames)

}) 




test("Select specific user for edition", async ({ page }) => {
  // Test code here

  const userForEdition = 'Savya'

  const loginPage = new LoginPage(page)
  await loginPage.doLogin('Admin', 'admin123')

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

  await (page.getByRole('link', {name: 'Admin'})).click()

  await (page.getByRole('navigation', {name: 'Topbar menu'})).getByText('User Management').click()
  await (page.getByRole('menuitem', {name: 'Users'})).click()

  const pencilToEdit =  page
  .getByRole('table')
  .getByRole('row')
  .filter({ hasText: userForEdition })
  .locator('button')
  .filter({has: page.locator('i.bi-pencil-fill') })
  .first()

await pencilToEdit.click()

const currentUsername = await page.locator("//label[contains(.,'Username')]/parent::div/following-sibling::div/input")
.inputValue()

expect(currentUsername).toEqual(userForEdition)

})
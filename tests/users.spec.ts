import { expect, test } from "@playwright/test"

test("Get all the usersnames registered", async ({ page }) => {
  // Test code here
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

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
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

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
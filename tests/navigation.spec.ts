import { expect, test } from "@playwright/test"

/*test("Check left menu options", async ({ page }) => {
  // Test code here
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()



  const leftMenuItems = (page.getByLabel('Sidepanel')).getByRole('listitem')
  const currentMenuItemsCount = await leftMenuItems.count()
  console.log('Current menu items count', currentMenuItemsCount)

  const currentMenuItems: string[] = []

  for(let i = 0; i < currentMenuItemsCount; i++) {
    const menuText = await leftMenuItems.nth(i).innerText()
    currentMenuItems.push(menuText)
  }

  console.log(currentMenuItems)

  const expectedMenuItems = [

    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz'
  ];

  expect(currentMenuItems).toEqual(expectedMenuItems)


})*/


test("Check left menu options", async ({ page }) => {
  // Test code here
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()



  const leftMenuItems = (page.getByLabel('Sidepanel')).getByRole('listitem')
  const currentMenuItemsCount = await leftMenuItems.count()
  console.log('Current menu items count', currentMenuItemsCount)

  const currentMenuItems: string[] = []

  for(let i = 0; i < currentMenuItemsCount; i++) {
    const menuText = await leftMenuItems.nth(i).innerText()
    currentMenuItems.push(menuText)
  }

  console.log(currentMenuItems)


expect(currentMenuItems[0]).toEqual('Admin')


})
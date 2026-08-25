import { expect, test } from "@playwright/test"
import { LoginPage } from "../pageObjects/LoginPage"

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


})


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


expect(currentMenuItems[0]).toEqual('Admin')


})*/



test('navegator through the left panel', async ({ page }) => {
test.setTimeout(90000) 

  const loginPage = new LoginPage(page)
  await loginPage.doLogin('Admin', 'admin123')

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()



  const leftMenuItems = (page.getByLabel('Sidepanel')).getByRole('listitem')
  const currentMenuItemsCount = await leftMenuItems.count()

  for(let i = 0; i < currentMenuItemsCount; i++) {
    const menuItem = leftMenuItems.nth(i)
    const menuText = await menuItem.innerText()
    
    console.log('Current menu item', menuText)
    
    await menuItem.click()

    if (menuText === 'Maintenance') {
      await page.goBack()
    }
  }


})




test("Check all the qualification links", async ({ page }) => {
test.setTimeout(60000)

    const ExpectedPages = [
      {menu: 'Skills', 
        url: '/web/index.php/admin/viewSkills'
    },
      {menu: 'Education', 
        url: '/web/index.php/admin/viewEducation'
    },
      {menu: 'Licenses', 
        url: '/web/index.php/admin/viewLicenses'
    },

    ]

  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()
  
  await page.getByRole('link', {name: 'Admin'}).click()

  await page.getByRole('navigation', { name: 'Topbar menu'}).getByText('Qualifications').click() 
  
  const qualificationOptions = page.getByRole('menu').locator('li')

  for (let espectedPage of ExpectedPages) {
    
    const menuOption = qualificationOptions.filter({ hasText: espectedPage.menu})
    await menuOption.click()
    await expect(page).toHaveURL(new RegExp(espectedPage.url))


    await page.getByRole('navigation', {name: 'Topbar menu'}).getByText('Qualifications').click()

  }


})



test("Check all the job links", async ({ page }) => {
test.setTimeout(60000)

    const ExpectedPages = [
      {menu: 'Job Titles', 
        url: '/web/index.php/admin/viewJobTitleList'
    },
      {menu: 'Pay Grades', 
        url: '/web/index.php/admin/viewPayGrades'
    },
      {menu: 'Employment Status', 
        url: '/web/index.php/admin/employmentStatus'
    },

    ]

  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()
  
  await page.getByRole('link', {name: 'Admin'}).click()

  await page.getByRole('navigation', { name: 'Topbar menu'}).getByText('Job').click()
   
  const jobOptions = page.getByRole('menu').locator('li')
  
  for (let espectedPage of ExpectedPages) {
    
    const menuOption = jobOptions.filter({ hasText: espectedPage.menu})
    await menuOption.click()
    await expect(page).toHaveURL(new RegExp(espectedPage.url))

    await page.getByRole('navigation', {name: 'Topbar menu'}).getByText('Job').click()

  }


})
import {test as base} from '@playwright/test'
import { LoginPage } from '../pageObjects/LoginPage'
import { SidePanel, SideMenuOption } from '../components/SidePaneles'
import { TopBarMenu } from '../components/top-barm-menu/top-bar-menu'

type MyFixtures = {
    loginPage: LoginPage
    sidePanel: SidePanel
    topBarMenu: TopBarMenu
    loggedInAdminPage: TopBarMenu
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },

    sidePanel: async ({page}, use) => {
        await use(new SidePanel(page))
    },

    topBarMenu: async ({page}, use) => {
        await use(new TopBarMenu(page))
    },

    loggedInAdminPage: async({page, loginPage, sidePanel, topBarMenu}, use) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await loginPage.loginAsAdmin()
        await sidePanel.clickOnOption(SideMenuOption.ADMIN)
        await use(topBarMenu)
    }
})

export {expect} from '@playwright/test'
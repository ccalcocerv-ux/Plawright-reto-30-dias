import { Locator, Page } from "@playwright/test";

export class OrganizationMenu{

    readonly page: Page;
    readonly organization: Locator;
    readonly generalInformationOption
    readonly locationsOption
    readonly structureOption
    
    constructor(page: Page){
        this.page = page
        this.organization = page.getByRole("navigation", { name: "Topbar menu" }).getByText("Organization")
        this.generalInformationOption = page.getByRole("menuitem", { name: "General Information" })
        this.locationsOption =          page.getByRole("menuitem", { name: "Locations" })
        this.structureOption =          page.getByRole("menuitem", { name: "Structure" })   
    
    }

    async clickOnOrganization() {
    await this.organization.click()
    }

    async clickGeneralInformation(){
    await this.clickOnOrganization()
    await this.generalInformationOption.waitFor({ state: 'visible' })
    await this.generalInformationOption.click()
    }

    async clickLocations(){
    await this.clickOnOrganization()
    await this.locationsOption.click()
    }

    async clickStructure(){
    await this.clickOnOrganization()
    await this.structureOption.click()
    }

    
}
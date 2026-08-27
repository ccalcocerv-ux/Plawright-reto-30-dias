import { Locator, Page } from "@playwright/test";

export class QualificationMenu{
    readonly page: Page;
    readonly qualifications: Locator;
    readonly skillsOption
    readonly educationOption
    readonly licensesOption
    readonly languagesOption
    readonly membershipsOption

    constructor(page: Page){
        this.page = page
        this.qualifications = page.getByRole("navigation", { name: "Topbar menu" }).getByText("Qualifications")
        this.skillsOption = page.getByRole("menuitem", { name: "Skills" })
        this.educationOption = page.getByRole("menuitem", { name: "Education" })
        this.licensesOption = page.getByRole("menuitem", { name: "Licenses" })
        this.languagesOption = page.getByRole("menuitem", { name: "Languages" })
        this.membershipsOption = page.getByRole("menuitem", { name: "Memberships" })
    
    }

    async clickOnQualifications() {
    await this.qualifications.click()
    }

    async clickSkills(){
    await this.clickOnQualifications()
    await this.skillsOption.waitFor({ state: 'visible' })
    await this.skillsOption.click()
    }

    async clickEducation(){
    await this.clickOnQualifications()
    await this.educationOption.click()
    }

    async clickLicenses(){
    await this.clickOnQualifications()
    await this.licensesOption.click()
    }

    async clickLanguages(){
    await this.clickOnQualifications()
    await this.languagesOption.click()
    }

    async clickMemberships(){
    await this.clickOnQualifications()
    await this.membershipsOption.click()
    }

}
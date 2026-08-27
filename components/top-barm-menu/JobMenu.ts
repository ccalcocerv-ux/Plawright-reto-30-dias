import { Locator, Page } from "@playwright/test";

export class JobMenu{

    readonly page: Page;
    readonly job: Locator;
    readonly jobTitlesOption
    readonly payGradesOption
    readonly employmentStatusOption
    readonly jobCategoriesOption
    readonly workShiftsOption

    constructor(page: Page){
        this.page = page
        this.job = page.getByRole("navigation", { name: "Topbar menu" }).getByText("Job")
        this.jobTitlesOption = page.getByRole("menuitem", { name: "Job Titles" })
        this.payGradesOption = page.getByRole("menuitem", { name: "Pay Grades" })
        this.employmentStatusOption = page.getByRole("menuitem", { name: "Employment Status" })
        this.jobCategoriesOption= page.getByRole("menuitem", { name: "Job Categories" })
        this.workShiftsOption = page.getByRole("menuitem", { name: "Work Shifts" })

    }

    async clickObJob() {
        await this.job.click()
    }

    async clickJobTitles(){
    await this.clickObJob()
    await this.jobTitlesOption.waitFor({ state: 'visible' })
    await this.jobTitlesOption.click()
    }

    async clickPayGrades(){
    await this.clickObJob()
    await this.payGradesOption.click()
    }

    async clickEmploymentStatus(){
    await this.clickObJob()
    await this.employmentStatusOption.click()
    }

    async clickJobCategories(){
    await this.clickObJob()
    await this.jobCategoriesOption.click()
    }

    async clickWorkShifts(){
    await this.clickObJob()
    await this.workShiftsOption.click()
    }

}
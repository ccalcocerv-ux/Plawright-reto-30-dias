import * as myfixtures from '../fixtures/myfixtures'

myfixtures.test('testing topbar menu', async ({loggedInAdminPage})=>{
myfixtures.test.setTimeout(60000)

    await loggedInAdminPage.job.clickJobTitles()
    await loggedInAdminPage.job.clickPayGrades()
    await loggedInAdminPage.job.clickEmploymentStatus()
    await loggedInAdminPage.job.clickJobCategories()
    await loggedInAdminPage.job.clickWorkShifts()

    await loggedInAdminPage.Organization.clickGeneralInformation()
    await loggedInAdminPage.Organization.clickLocations()
    await loggedInAdminPage.Organization.clickStructure()

})

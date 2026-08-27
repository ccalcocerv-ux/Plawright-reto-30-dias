import {Page} from "@playwright/test"
import { UserManagementMenu } from "./UserManagementMenu"
import { JobMenu } from "./JobMenu"
import { OrganizationMenu} from "./OrganizationMenu"
import { QualificationMenu } from "./QualificationMenu"
import { NationalitiesMenu } from "./NationalitiesMenu"
import { CorporateBrandingMenu} from "./CorporateBrandingMenu"
import { ConfigurationMenu } from "./ConfigurationMenu"


export class TopBarMenu{
    [x: string]: any

    readonly page: Page
    readonly UserManagement: UserManagementMenu
    readonly job: JobMenu
    readonly Organization: OrganizationMenu
    readonly Qualifications: QualificationMenu
    readonly Nationalities: NationalitiesMenu
    readonly CorporateBranding: CorporateBrandingMenu
    readonly Configuration: ConfigurationMenu

    constructor(page: page){
        this.page = Page
        this.UserManagement = new UserManagementMenu(page)
        this.job = new JobMenu(page)
        this.Organization = new OrganizationMenu(page)
        this.Qualifications = new QualificationMenu(page)
        this.Nationalities = new NationalitiesMenu(page)
        this.CorporateBranding = new CorporateBrandingMenu(page)
        this.Configuration = new ConfigurationMenu(page)

    }

}
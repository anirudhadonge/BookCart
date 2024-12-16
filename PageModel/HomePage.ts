import { Page } from "@playwright/test";



export default class HomePage{
    page: Page;
    loginbtn = "[mattooltip='Login']";
    myCart =".mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base.ng-star-inserted";

    constructor(page:Page){
        this.page= page;
    }

    async clickOnLoginButton(){
        await this.page.locator(this.loginbtn).click();
    }

    async selectBookFromHomePage(bookName:string){
        await this.page.locator(`//strong[text()='${bookName}']//ancestor::mat-card-content//button`).click();
    }

    async clickMyCart(){
        await this.page.locator(this.myCart).nth(1).click();
    }
}
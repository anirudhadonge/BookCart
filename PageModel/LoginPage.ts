import { expect, Page } from "@playwright/test";

export default class LoginPage{
    page:Page;
    userNameInput:string ="[placeholder='Username']";
    passwordInput:string ="[placeholder='Password']";
    loginbtn:string =".mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base";
    loginError: string = ".mat-mdc-card-subtitle mat-error";
    constructor(page:Page){
        this.page = page;
    }

    async loginToApp(userName:string, password:string){
        await this.page.locator(this.userNameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbtn).click();
    }

    async validateLoginIsSuccess(userName:string){
         await expect(this.page.locator(`.d-flex.align-items-center .mdc-button__label:has-text('${userName}')`)).toBeVisible();
    }

    async validateLoginIsUnSuccessfull(message: string){
        await expect(this.page.locator(this.loginError)).toHaveText(message);
    }
}
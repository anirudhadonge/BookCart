import { expect, Page } from "@playwright/test";



export default class ShoppingCart{
        page:Page;
        constructor(page:Page){
            this.page = page;
        }

    async validateBookInCard(bookName:string){
        await expect(await this.page.locator(`//a[text()='${bookName}']`)).toBeVisible();
    }
}
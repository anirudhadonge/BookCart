import test, { Browser, BrowserContext, Page } from "@playwright/test";
import LoginPage from "../PageModel/LoginPage";
import HomePage from "../PageModel/HomePage";
import { invokeBrowser } from "../Browser/BrowserManager";
//@ts-ignore
let loginPage: LoginPage;
let homePage:HomePage;
let page: Page;
test.describe('',async ()=>{
    test.beforeEach('This is a before each method',async()=>{
        let browser:Browser = await invokeBrowser()
        let context:BrowserContext = await browser.newContext();
        page = await context.newPage();
        await page.goto(process.env.APPURL!);
        homePage = new HomePage(page);
        await homePage.clickOnLoginButton();
        loginPage = new LoginPage(page);
    })

    test('Add to Cart', async()=>{

    })
})    

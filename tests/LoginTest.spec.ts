import {test,Browser, BrowserContext, Page} from "@playwright/test";
import { invokeBrowser } from "../Browser/BrowserManager";
import HomePage from "../PageModel/HomePage";
import LoginPage from "../PageModel/LoginPage";
//@ts-ignore
let loginPage: LoginPage;
let homePage:HomePage;
let errorMessage="Username or Password is incorrect.";
let page: Page
let browser:Browser;
let context:BrowserContext 

const userName = process.env.USERNAME;
const password = process.env.PASSWORD;

test.describe('@Regression This is a login test description',async()=>{
    
test.beforeEach('This is a before each method',async()=>{
        browser = await invokeBrowser()
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(process.env.APPURL);
        homePage = new HomePage(page);
        await homePage.clickOnLoginButton();
        loginPage = new LoginPage(page);
        await loginPage.loginToApp(userName,password);
    })
    
    test(`This a login success test`,async()=>{
        await loginPage.loginToApp(userName!,password!);
        await loginPage.validateLoginIsSuccess(process.env.USERNAME!);
    })

    test('This a login failure',async()=>{
        loginPage = new LoginPage(page);
        await loginPage.loginToApp(userName!,"demo134");
        await loginPage.validateLoginIsUnSuccessfull(errorMessage);
    })
})
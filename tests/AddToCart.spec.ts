import test, { Browser, BrowserContext, Page } from "@playwright/test";
import LoginPage from "../PageModel/LoginPage";
import HomePage from "../PageModel/HomePage";
import { invokeBrowser } from "../Browser/BrowserManager";
import books from '../TestData/CartDetails.json'
import CartDetails from "../Data/CartDetails";
import CartItem from "../Data/CartItem";
import ShoppingCart from "../PageModel/ShoppingCart";
//@ts-ignore
let loginPage: LoginPage;
let homePage:HomePage;
let page: Page;
let cartDetails:CartDetails ;
let cartItem:CartItem;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;

test.describe('',async ()=>{
    test.beforeEach('This is a before each method',async()=>{
        let browser:Browser = await invokeBrowser()
        let context:BrowserContext = await browser.newContext();
        page = await context.newPage();
        await page.goto(process.env.APPURL!);
        homePage = new HomePage(page);
        await homePage.clickOnLoginButton();
        loginPage = new LoginPage(page);
        await loginPage.loginToApp(userName!,password!);
    })

    test.only('Add to Cart', async()=>{
        for(const book of books.Books){
            await homePage.addToCart(book.BookName);
            const bkPrice = await homePage.getPriceOfItem(book.BookName);
        }
        await homePage.clickMyCart();
        let shoppingCart = new ShoppingCart(page);
        for(const book of books.Books){
            shoppingCart.validateBookInCard(book.BookName);
        }
    })
})    

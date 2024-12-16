import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";
import { Browser, BrowserContext } from "@playwright/test";


/**
 * 
 * @returns This return the Promise objec of browser
 */
export const invokeBrowser = async ():Promise<Browser> => {
    let browserType = process.env.BROWSER;
    switch (browserType) {
        case "chromium":
            return await chromium.launch(setBrowserOptions());
        case "firefox":
            return await firefox.launch(setBrowserOptions());
        case "webkit":
            return await webkit.launch(setBrowserOptions());
        case "chrome":
            return await chromium.launch(setBrowserOptions('chrome'));
        case "msedge":
            return await chromium.launch(setBrowserOptions('msedge'));
        default:
            throw new Error("Please set the proper browser!")
    }

}

/**
* 
* @returns This return the LaunchOptions object.
*/
function setBrowserOptions(browserChannel?:string):LaunchOptions{
    let options: LaunchOptions = {
            headless: false,
            channel:browserChannel
    }
    if(process.env.HEADLESS == 'true'){
        options.headless = true
    }
    return options
}

/**
 * 
 * @returns This return the Promise object of BrowserContext
 */
export async function getBrowserPersistentContext(userDir:string): Promise<BrowserContext> {
    switch (process.env.BROWSER) {
        case "chromium":
            return await chromium.launchPersistentContext(userDir, setBrowserOptions());
        case "firefox":
            return await firefox.launchPersistentContext(userDir, setBrowserOptions());
        case "webkit":
            return await webkit.launchPersistentContext(userDir, setBrowserOptions());
        case "chrome":
            return await chromium.launchPersistentContext(userDir, setBrowserOptions('chrome'));
        case "msedge":
            return await chromium.launchPersistentContext(userDir,setBrowserOptions('msedge'));
        default:
            throw new Error("Please set the proper browser!")
    }
    
}
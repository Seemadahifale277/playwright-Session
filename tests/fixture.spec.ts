import {test,expect} from "@playwright/test";

test("Browser, context , fixture", async ({page})=>
{
await page.goto("https://demowebshop.tricentis.com/")
await page.getByText('Log in').click();

await page.waitForTimeout(5000)

})


test("fixture", async ({context})=>
{
const page1 = await context.newPage();
await page1.goto("https://demowebshop.tricentis.com/")
await page1.getByText('Log in').click();

const page2 = await context.newPage();
await page2.goto("https://www.saucedemo.com/") // tab opened in new window



await page1.waitForTimeout(5000)
await page2.waitForTimeout(5000)

})



test("browser", async ({browser})=>
{

const context = await browser.newContext()
const page1 = await context.newPage();
await page1.goto("https://demowebshop.tricentis.com/")
await page1.getByText('Log in').click();


// same context new page 

const page2 = await context.newPage();
await page2.goto("https://www.saucedemo.com/")




//-----------------------new context and new page----------------------------


const context1 = await browser.newContext()
const page3 = await context1.newPage();
await page3.goto("https://demowebshop.tricentis.com/")
await page3.getByText('Log in').click();


// same context new page 
const page4 = await context1.newPage();
await page4.goto("https://www.saucedemo.com/")




await page1.waitForTimeout(5000)
await page2.waitForTimeout(5000)

})
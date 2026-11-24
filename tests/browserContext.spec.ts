import {test,expect,chromium  } from "@playwright/test";

test("Browser, context , fixture", async ()=>
{

const browser = await chromium.launch()


//create context

const context1 = await browser.newContext()
const page1 = await context1.newPage()



const context2 = await browser.newContext()
const page2 = await context2.newPage()


await page1.goto("https://www.saucedemo.com/")
await page1.locator('#user-name').fill('standard_user')
await page1.locator('#password').fill('secret_sauce')
page1.locator('#login-button').click()





await page2.goto("https://www.saucedemo.com/")

await page2.locator('#user-name').fill('visual_user')
await page2.locator('#password').fill('secret_sauce')
await page2.locator('#login-button').click()





await page1.waitForTimeout(5000)
await page2.waitForTimeout(5000)


})
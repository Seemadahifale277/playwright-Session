import {test,expect, chromium  } from "@playwright/test";
import fs from 'fs';

test("cookies ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()



await page.goto("https://playwright.dev/")


// add cookies

await context.addCookies([
    {
      name : 'text',
      value : 'value',
      domain : 'playwright.dev',
      path : '/',

    },

     {
      name : 'val',
      value : 'text',
      url : 'https://www.example.com',

    }
])


let cookies =await context.cookies()
console.log("cookies", cookies)



await context.clearCookies()
cookies =await context.cookies()
console.log("after clearing cookies", cookies)




})


test(" login cookies  ", async ({})=>

{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

//const path = 'tests\storage'


await page.goto("https://sdetqa.vercel.app/login_app")

await page.locator('[placeholder="Enter username"]').fill("admin")
await page.locator('[placeholder="Enter password"]').fill("admin123")
await page.locator('[value="cookie"]').nth(0).click()

await page.locator('[type="submit"]').click()

await expect(page.getByText('Dashboard')).toBeVisible()


let cookies =await context.cookies()

// {
//     name : 'abc',
//     value : 'value'
// }


//fs.writeFileSync()







})
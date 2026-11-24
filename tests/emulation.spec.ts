import {test,expect,devices} from "@playwright/test";

test("emulation", async ({browser})=>
{
const context = await browser.newContext(
{
    permissions: [

        'geolocation', 
        'microphone',
        'notifications'
         ],

    locale: "en-US",

    viewport: {width: 375, height: 667},

    ignoreHTTPSErrors: true,
})
 

const page = await context.newPage()

//await page.goto("https://www.google.com/")

await page.goto("https://expired.badssl.com/")

await page.waitForTimeout(5000)

})
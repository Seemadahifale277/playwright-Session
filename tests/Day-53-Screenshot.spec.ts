// Screenshot :
// 1. within test script
// 2. Global config.ts file

import {test,expect} from "@playwright/test";
import { truncate } from "fs";


test.beforeEach(async ({page})=>
{
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(5000)
})


test("screenshot of page", async ({page})=>
{

await page.screenshot({path : 'ScreenshotTestScript/01_screenshot of page.png'})


})


// Test case 2 full page screenshot
test("FullPagescreenshot of page", async ({page})=>
{

await page.screenshot({path : 'ScreenshotTestScript/01_screenshot of page.png', fullPage: true})


})



// Test Case for quality screenshot 
test("Quality Screenshot", async ({page})=>
{

await page.screenshot({
    path : 'ScreenshotTestScript/01_screenshot of page.jpg',
    quality: 90
})


})


// Test case 4 dimension screenshot
test("dimension Screenshot", async ({page})=>
{

await page.screenshot({
    path : 'ScreenshotTestScript/01_screenshot of page.png',
    clip:
    {
        width: 500,
        height: 500,
       x: 100,
       y: 100
    }

})
})




test("screenshot of page 1", async ({page})=>
{
   const playwrightText = page.locator('.navbar__title ')

   await playwrightText.screenshot({

    path : 'ScreenshotTestScript/04_locator_screenshot.png'

   })


})


test('mask element', async ({page})=>
{

    const playwrightText = page.locator('.navbar__title ')

   await page.screenshot({

    path : 'ScreenshotTestScript/04_locator_screenshot.png',
    mask : [playwrightText],
    omitBackground : true,
    animations : 'disabled'
   })


})

test('dynamic screenshot file name', async ({page} , testInfo)=>
{

    const timestamp = Date.now()

   
// Approach 1 
//    await page.screenshot({
//     path : `ScreenshotTestScript/screenshot_${timestamp}.png`,
//     })



})





test('dynamic screenshot file name 1', async ({page} , testInfo)=>
{

    const timestamp = Date.now()

let fileName = `ScreenshotTestScript/${testInfo.title}_${timestamp}.png`
await page.screenshot({path : fileName})


})



test.only('attach screenshot to report', async ({page} , testInfo)=>
{

    const timestamp = Date.now()

let fileName = `ScreenshotTestScript/${testInfo.title}_${timestamp}.png`
await page.screenshot({path : fileName})

await testInfo.attach("image screenshot", {

    path : fileName,
    contentType : 'image/png'
})


})

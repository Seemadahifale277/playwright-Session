import {test,expect} from "@playwright/test";

test.beforeEach(async ({page})=>
{
    await page.goto("https://playwright.dev/")
})


test("screenshot of page", async ({page})=>
{
    await page.screenshot({path : 'screenshots/01_test.png'})
})



test("screenshot of page 1", async ({page})=>
{
    const timestamp = Date.now()
    let filename = `screenshots/screen_${timestamp}.png`
    await page.screenshot({path : filename})
})
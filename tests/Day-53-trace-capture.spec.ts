import {test,expect, chromium} from "@playwright/test";

test("trace capture", async ({ }, testInfo)  =>
{

const browser =  await chromium.launch()

const context = await browser.newContext()

const page = await context.newPage()


context.tracing.start({

    screenshots : true,
    snapshots : true,
    sources : true
    
})


await page.goto("https://playwright.dev/");
const text = page.locator(".navbar__brand")
await expect(text).toBeVisible()

const tracePath = `traces/trace-${Date.now()}.zip`






await context.tracing.stop({
    path: tracePath
})



await testInfo.attach('trace view',
    {
      path : tracePath

    }
)






})
import {test,chromium,expect} from "@playwright/test"

test("Local Storage Login ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext({storageState: 'tests/storage/localStoragedata.json'})
const page = await context.newPage()



await page.goto("https://sdetqa.vercel.app/login_app")
await expect(page.getByText('Dashboard')).toBeVisible()
await page.waitForTimeout(5000)


})



test("Local Storage1 Login ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext({storageState: 'tests/storage/localStoragedata1.json'})
const page = await context.newPage()



await page.goto("https://sdetqa.vercel.app/login_app")
await expect(page.getByText('Dashboard')).toBeVisible()
await page.waitForTimeout(5000)


})

import { chromium,test  } from "@playwright/test";




async function localStorage()
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()



await page.goto("https://sdetqa.vercel.app/login_app")
await page.locator('[placeholder="Enter username"]').fill("admin")
await page.locator('[placeholder="Enter password"]').fill("admin123")
//await page.locator('[value="cookie"]').nth(0).click()//cookies
await page.locator('[value="localStorage"]').click() //local storage
await page.locator('[type="submit"]').click()
//await page.waitForSelector("getByText('Dashboard')",{state : 'visible'})
await context.storageState({path :'tests/storage/localStoragedata.json' })
}





async function localStorage1()
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()



await page.goto("https://sdetqa.vercel.app/login_app")
await page.locator('[placeholder="Enter username"]').fill("testuser1")
await page.locator('[placeholder="Enter password"]').fill("testuser123")
//await page.locator('[value="cookie"]').nth(0).click()//cookies
await page.locator('[value="localStorage"]').click() //local storage
await page.locator('[type="submit"]').click()
//await page.waitForSelector("getByText('Dashboard')",{state : 'visible'})
await context.storageState({path :'tests/storage/localStoragedata1.json' })
}








test("calling fun", async()=>
{
   await localStorage() 
   await localStorage1() 
})

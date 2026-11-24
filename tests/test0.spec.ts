import { chromium,test}  from "@playwright/test"

async function storage()
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()




await page.goto("https://sdetqa.vercel.app/login_app")

await page.locator('[placeholder="Enter username"]').fill("admin")
await page.locator('[placeholder="Enter password"]').fill("admin123")
await page.locator('[value="cookie"]').nth(0).click()//cookies

await page.locator('[type="submit"]').click()



//await expect(page.getByText('Dashboard')).toBeVisible()

await context.storageState({path:'tests/storage/datastorage.json'})
}

async function storage1()
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()




await page.goto("https://sdetqa.vercel.app/login_app")

await page.locator('[placeholder="Enter username"]').fill("testuser1")
await page.locator('[placeholder="Enter password"]').fill("testuser123")
await page.locator('[value="cookie"]').nth(0).click()//cookies

await page.locator('[type="submit"]').click()



//await expect(page.getByText('Dashboard')).toBeVisible()

await context.storageState({path:'tests/storage/datastorage1.json'})
}











//storage()

test("Storage test", async () => {
    await storage()
    await storage1()
})
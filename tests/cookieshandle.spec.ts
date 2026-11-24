
import {test,expect, chromium  } from "@playwright/test";
import fs from 'fs';


const path = 'tests/storage/cookies.json'

test.describe.configure({mode : 'serial'})

test("login cookies  ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

//const path = 'tests\storage'


await page.goto("https://sdetqa.vercel.app/login_app")

await page.locator('[placeholder="Enter username"]').fill("admin")
await page.locator('[placeholder="Enter password"]').fill("admin123")
await page.locator('[value="cookie"]').nth(0).click()//cookies

await page.locator('[type="submit"]').click()



await expect(page.getByText('Dashboard')).toBeVisible()


let cookies =await context.cookies()

// {
//     name : 'abc', 
//     value : 'value'
// }

fs.writeFileSync(path,JSON.stringify(cookies,null,2))
})





test("login1 cookies  ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

//const path = 'tests\storage'

const redfile = JSON.parse(fs.readFileSync(path,'utf8'))
context.addCookies(redfile)

await page.goto("https://sdetqa.vercel.app/login_app")

await expect(page.getByText('Dashboard')).toBeVisible()

await page.waitForTimeout(5000)


})






import {test,chromium,expect} from "@playwright/test"
import fs from 'fs'

async function sessionData()
{
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()



await page.goto("https://sdetqa.vercel.app/login_app")

console.log("url launched")


await page.locator('[placeholder="Enter username"]').fill("admin")
await page.locator('[placeholder="Enter password"]').fill("admin123")
//await page.locator('[value="cookie"]').nth(0).click()//cookies
//await page.locator('[value="localStorage"]').click() //local storage

await page.locator('[value="sessionStorage"]').check()
await page.locator('[type="submit"]').click()

//await page.waitForSelector("getByText('Dashboard ')",{state : 'visible'})
await expect(page.getByText('Dashboard')).toBeVisible()

const sessionfile =await page.evaluate(()=>{
    return sessionStorage;
})

console.log(sessionfile)


fs.writeFileSync("tests/storage/session.json", JSON.stringify(sessionfile))
//fs.writeFileSync("tests/storage/session.json", JSON.stringify(session))


}

test("login",async()=>
{

await sessionData()

})





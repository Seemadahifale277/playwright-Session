import {test,chromium,expect} from "@playwright/test"
import fs from 'fs'



test("Local Storage Login ", async ({})=>
{
//browser -> context -> page 
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()



// {"auth_session_user":"admin","auth_session_admin":"authenticated"}
const sessionData = JSON.parse(fs.readFileSync('tests/storage/session.json','utf8'))






await context.addInitScript((storage) => {
for(const key  in storage)
{
sessionStorage.setItem(key, storage[key])

}
},sessionData)



await page.goto("https://sdetqa.vercel.app/login_app")
await expect(page.getByText('Dashboard')).toBeVisible()
await page.waitForTimeout(5000)


})



// test("Local Storage1 Login ", async ({})=>
// {
// //browser -> context -> page 
// const browser = await chromium.launch()
// const context = await browser.newContext({storageState: 'tests/storage/localStoragedata1.json'})
// const page = await context.newPage()



// await page.goto("https://sdetqa.vercel.app/login_app")
// await expect(page.getByText('Dashboard')).toBeVisible()
// await page.waitForTimeout(5000)


// })
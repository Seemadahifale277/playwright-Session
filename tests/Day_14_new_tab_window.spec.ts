import {test,expect  } from "@playwright/test";

test("New Tab ", async ({browser})=>
{


const context = await browser.newContext()
const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

const [newTab]= await Promise.all(
[     
       context.waitForEvent('page'),
      page.getByRole('button', {name : 'New Tab'}).click()
])


console.log(await newTab.title())

await page.waitForTimeout(5000)

})

//---------------------------------------------------------------


test.only("New Window ", async ({browser})=>
{


const context = await browser.newContext()
const page = await context.newPage()

    await page.goto("https://sdetqa.vercel.app/autoplay")

const [newWindow]= await Promise.all(
[     
       context.waitForEvent('page'),
      page.getByRole('button', {name : 'New Window'}).click()
])


console.log(await newWindow.title())

await page.waitForTimeout(5000)

await expect(newWindow).toHaveURL("https://playwright.dev/")

})
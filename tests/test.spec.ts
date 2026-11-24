import { test , expect } from "@playwright/test";


test("storage operation",async({browser})=>
{
const context = await browser.newContext({storageState: 'tests/storage/datastorage.json'})
const page= await context.newPage() 
await page.goto("https://sdetqa.vercel.app/login_app")
await page.waitForTimeout(5000)
})


test("storage1 operation",async({browser})=>
{
const context = await browser.newContext({storageState: 'tests/storage/datastorage1.json'})
const page= await context.newPage() 
await page.goto("https://sdetqa.vercel.app/login_app")
await page.waitForTimeout(5000)
})




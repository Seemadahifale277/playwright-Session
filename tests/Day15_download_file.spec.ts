import {test,expect } from "@playwright/test";
import fs from "fs"

test.skip("Single File upload validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")


     const [download]= await Promise.all(
    [
    page.waitForEvent('download'),
     page.getByRole('button', {name : 'Download File'}).click()
   ]
)



expect(download.suggestedFilename()).toContain("sample.txt")

const downloadPath = `downloads1/${download.suggestedFilename()}`;

await download.saveAs(downloadPath)

const fileExist = fs.existsSync(downloadPath)

expect(fileExist).toBeTruthy()


if(fileExist)
{
    fs.unlinkSync(downloadPath)
}


await page.waitForTimeout(5000)



})






test("Open PDF file validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

const [pdfOpen]= await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('button', {name : 'Open PDF'}).click()
])

expect(pdfOpen).toBeTruthy()

await page.waitForTimeout(5000)

})


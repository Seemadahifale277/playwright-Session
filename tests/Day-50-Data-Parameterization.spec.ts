import {test,expect, chromium  } from "@playwright/test";


const dataSet : string[] = ['laptop', 'Gift card' , 'computer' , 'Smartphone']



for(const searchItem of dataSet)
{
test(`Data Parameterization ${searchItem}` , async ({page})=>
{

await page.goto("https://demowebshop.tricentis.com/")
await page.locator('input#small-searchterms').fill(searchItem)
await page.locator('input[value="Search"]').click()
await page.waitForTimeout(5000)

})

}
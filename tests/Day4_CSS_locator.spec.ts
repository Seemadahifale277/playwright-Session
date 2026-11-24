import {test,expect  } from "@playwright/test";




const URL = "https://demowebshop.tricentis.com/"

test.describe("all test", ()=>
{

test.beforeEach(async ({page}) =>
{
   await page.goto(URL)
})




test("css locator", async ({page})=>
{

    //await page.goto(URL)
    const searchInputBox =  page.locator("input#small-searchterms")

    await searchInputBox.fill("laptop")

    await page.locator("input.search-box-button").click()

    //await page.locator('h2[class="product-title"] a')


})




test.skip("css locator 2", async ({page})=>
{

    //await page.goto(URL)
    const searchInputBox =  page.locator(".search-box-text")

    await searchInputBox.fill("laptop")

    await page.locator("input.search-box-button").click()


})



test("css locator 3", async ({page})=>
{

    //await page.goto(URL)
    const searchInputBox =  page.locator('[value="Search store"][name="q"]')

    await searchInputBox.fill("laptop")

    await page.locator("input.search-box-button").click()
     await page.close()

})
})
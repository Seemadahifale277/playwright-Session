import {test,expect  } from "@playwright/test";
test("css locator", async ({page})=>
{
// partial match  with using *

    // await page.goto("https://demowebshop.tricentis.com/")
    // const searchInputBox =  page.locator("[id*='searchterms']")
    // await searchInputBox.fill("laptop")
    // await page.locator("input.search-box-button").click()



    // starts with match  using ^


    //   await page.goto("https://demowebshop.tricentis.com/")
    // const searchInputBox =  page.locator("[id^='small']")
    // await searchInputBox.fill("laptop")
    // await page.locator("input.search-box-button").click()



    // Ends with match  using $ Symbol


//   await page.goto("https://demowebshop.tricentis.com/")
//     const searchInputBox =  page.locator("[id$='searchterms']")
//     await searchInputBox.fill("laptop")
//     await page.locator("input.search-box-button").click()


})
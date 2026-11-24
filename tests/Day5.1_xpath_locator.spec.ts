// import {test,expect  } from "@playwright/test";
// test("css locator", async ({page})=>
// {

    // single attribute xpath

/*
await page.goto("https://demowebshop.tricentis.com/")
const title = page.locator('//img[@alt="Tricentis Demo Web Shop"]')
await expect(title).toBeVisible()
*/
//await page.goto("https://demowebshop.tricentis.com/")

/*
//------------------------------using contains xpath 
const withContains = page.locator('//h2//a[contains(@href,"computer")]')
//await expect(withContains).toBeVisible()

const count1 = await withContains.count()
 expect(count1).toBeGreaterThan(0)
 console.log(await withContains.nth(1).textContent())

 console.log(await withContains.allTextContents())
*/
    
//-----------------------------xpath using starts-with-----------------------





//const withContains = page.locator("//h2//a[starts-with(@href,'/build')]")
//await expect(withContains).toBeVisible()

// const count1 = await withContains.count()
//  expect(count1).toBeGreaterThan(0)
//  console.log(await withContains.nth(1).textContent())

//  console.log(await withContains.allTextContents())

//------------------------Xpath using text-------------------------------

// const text = page.locator("//a[text()='Register']")
// await expect(text).toBeVisible()






// xpath by using last 
// page.locator("//div[@class='column customer-service']//li[last()]")



// // xpath by using position
// page.locator("//div[@class='column customer-service']//li[position()=2]")
//})


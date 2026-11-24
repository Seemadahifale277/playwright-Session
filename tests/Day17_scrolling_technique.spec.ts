// 1  click()
// 2. fill()
// 3. check()
// 4. hover()
// 5. expect().toBeVisible()

// 1.  Scroll by pixel 
// 2. scroll to specific element 
// 3. bottom of the document
// 4. scroll infinite time  -> logic


import {test,expect } from "@playwright/test";


test("Mouse action validation", async ({page})=>
{
  
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

    const flag = page.getByAltText("Flag of Canada")

    //await page.waitForTimeout(5000)
    await expect(flag).toBeVisible()

    

})




// test.only("Mouse double click action validation", async ({page})=>
// {

//     await page.goto("https://sdetqa.vercel.app/autoplay")


//     const field1 = page.locator("#field1")
//     const field2 = page.locator("#field2")
//     const copyclick = page.getByRole('button', {name : 'Copy Text'})

//     await field1.fill("test1");
//     await copyclick.dblclick() // double click 

//     await page.waitForTimeout(5000)

//     await expect(field2).toHaveValue("test1")


// })



//1. by pixel

test("Scroll By pixel", async ({page})=>
{
  
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

    
await page.evaluate(()=> window.scrollTo(0,500))

    await page.waitForTimeout(5000)
const scrollpixelValue = await page.evaluate(()=> window.scrollY)
console.log(scrollpixelValue)
    

})

//------scroll to specific element ------------------


test("Scroll to specific element", async ({page})=>
{
  
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

     const flag = page.getByAltText("Flag of Canada")

     await flag.scrollIntoViewIfNeeded()

     await expect(flag).toBeVisible()


})



// -----scroll To bottom of the document 


test("Scroll to bottom of the document", async ({page})=>
{
  
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

  page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))

  await page.waitForTimeout(5000)
await expect(page.locator('.text-zinc-200')).toBeVisible()

})


//------- scroll to Top 


test.only("Scroll to Top of the document", async ({page})=>
{
  
    await page.goto("https://www.worldometers.info/geography/flags-of-the-world/")

    page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))

  //page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))

  await page.waitForTimeout(5000)

  //await page.evaluate(()=> window.scrollTo(0,0))

  page.evaluate(()=> window.scrollTo(0,-document.body.scrollHeight))

  await page.waitForTimeout(5000)
await expect(page.locator('.text-zinc-200')).toBeVisible()

})


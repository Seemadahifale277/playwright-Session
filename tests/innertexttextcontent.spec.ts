import {test,expect  } from "@playwright/test";

test("hidden dropdown", async ({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/")
 const allproduct = page.locator('.product-title')

 console.log(await allproduct.nth(1).innerText())
  //console.log(await allproduct.nth(1).textContent())
  const text = await allproduct.nth(1).textContent()

  if(text!==null && text!==undefined)
  {
  console.log(text.trim())
  }

})
import {test,expect } from "@playwright/test";

let initialHeight =0
test("Mouse action validation", async ({page})=>
{
  
    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500")

while(true)
{
  await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))
   await page.waitForTimeout(2000)



   const currentHeight = await page.evaluate(()=>
    { 
        return document.body.scrollHeight;
        

    })



console.log(currentHeight)
console.log(initialHeight)

if(initialHeight===currentHeight) // 1st -> i=0,c=100------> i=100, c=200 -------> i=200,c=200
  {
   break;
 }

 initialHeight=currentHeight  

   console.log("End")

}



})
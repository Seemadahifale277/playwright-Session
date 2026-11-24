import {test,expect,Page } from "@playwright/test";

async function dateSelect(page : Page, year:string,month:string,date:string,isFuture?:boolean)
{

while(true)
{
const currentmonth = await page.locator('.ui-datepicker-month').innerText()
const currentyear = await page.locator('.ui-datepicker-year').innerText()

if(currentmonth===month && currentyear===year)
{
break;
}

if(isFuture)
{
//await page.locator('.ui-datepicker-next').click() //next button

await page.locator('.ui-icon-circle-triangle-e').click()
}

else
{
await page.locator('.ui-datepicker-prev').click() //previous button

}
}

const allDates = await page.locator('.ui-datepicker-calendar td').all()

for(const dt of allDates)
{
const dtText =await dt.innerText()

if(dtText===date)
{
    await dt.click()
    break;

}

}



}


test("Test Case 1  Date Picker Validation", async ({page})=>
{

await page.goto("https://sdetqa.vercel.app/autoplay")




// Approach 1st 
const date1 = page.locator('input#datepicker1')
// await date1.fill('14/10/2026')
// await page.waitForTimeout(5000)

//Approach 2nd 

await date1.click()

const year = '2024'
const month = 'November'
const date = '17'

await dateSelect(page, year,month,date,false)


await page.waitForTimeout(5000)


})
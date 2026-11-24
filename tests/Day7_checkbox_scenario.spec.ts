import {test,expect  } from "@playwright/test";



const url = "https://sdetqa.vercel.app/autoplay"

test.beforeEach(async ({page})=>
{await page.goto(url)})


test("Test 1 to validate URL", async ({page})=>
{

// const monCheck = page.getByLabel('Mon')
// await monCheck.check()

// //await monCheck.setChecked(true)
// await expect(monCheck).toBeChecked()



//-------------------check all checkboxes----------------------


const allWeekName = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

// // for(const day of allWeekName)
// // {
// //     const allCheck = page.getByLabel(day)
// //     await allCheck.check()
// //     await expect(allCheck).toBeChecked()

// // }

const mapVale = allWeekName.map((day)=>
 {
     return page.getByLabel(day)
 })

// for(const checkbox of mapVale)
// {
//     await checkbox.check()
//     await expect(checkbox).toBeChecked()
// }

// //--------------deselect last 3 checkboxes----------------------------



// for(const day of ['Fri','Sat','Sun'])
// //for(const day of allWeekName.slice(-3))
// {
//     const last3uncheck = page.getByLabel(day)
//     await last3uncheck.uncheck()
//     await expect(last3uncheck).not.toBeChecked()
// }


// //-----------check -> uncheck, uncheck -> check ------------------------------------------


// for(const day of allWeekName)
// {
//     const scenario3 = page.getByLabel(day)
//      if(await scenario3.isChecked())
//      {
//         await scenario3.uncheck()
//         await expect(scenario3).not.toBeChecked()

//      }

//      else
//     {
//        await scenario3.check()
//        await expect(scenario3).toBeChecked()

//     }
//     //await page.waitForTimeout(5000)

// } 

//await page.waitForTimeout(10000)

// const allWeekName = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

const index = [1,4,5]


// for(const i of index)
// {
// await mapVale[i].check()
// }

// await page.waitForTimeout(5000)


for(const i of index)
{
const indexCheck = page.getByLabel(allWeekName[i])
await indexCheck.check()
await expect(indexCheck).toBeChecked()

}




})
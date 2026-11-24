
import {test,expect  } from "@playwright/test";

test("hidden dropdown", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const table = page.locator('table').first()
    const header = table.locator('thead th')
    const bodyrow = table.locator('tbody tr')


    // 
    console.log(await header.count()) // column count =5
    console.log(await bodyrow.count()) // = 4

    await expect(header).toHaveCount(5)
    await expect(bodyrow).toHaveCount(4)

// Specific 
const firstRowTable = bodyrow.nth(1).locator('td')
//console.log(await firstRowTable.allTextContents())
await expect(firstRowTable).toHaveText(['Mouse','Electronics','$29','50', 'In Stock'])

// extract all data from table excluding headers

const datatable : string[][]=[];
const rowcount = await bodyrow.count()
for(let i=0; i< rowcount;i++)
{
const cellValue = await bodyrow.nth(i).locator('td').allInnerTexts()
datatable.push(cellValue)

//console.log(cellValue)

}
console.log(datatable[1])


//print all product name 
const productName=[]
for(let i =0; i<datatable.length;i++)
{
productName.push(datatable[i][0])

}
console.log(productName)

// print product name where stock is zero 


const productstock=[]

for(let i =0;i<datatable.length;i++)
{
if(datatable[i][3]==='0')
{
   productstock.push(datatable[i][0])
}

}
console.log(productstock)

// print product name whose having status as instock 

const instock=[]

for(let i =0;i<datatable.length;i++)
{
if(datatable[i][4]==='In Stock' )
{
   instock.push(datatable[i][0])
}

}
console.log(instock)
15

let keyboardprice;
for(let i=0;i<datatable.length;i++)
{
    if(datatable[i][0]==='Keyboard')
    {
       keyboardprice= (datatable[i][2])
    }
}
console.log(keyboardprice)

expect(keyboardprice).toBe('$79')


let total =0


for(let i=0; i<datatable.length;i++)
{

total += Number(datatable[i][2].replace('$',''))

}
console.log(total)


})


// lowest price and highest price  - assignment 





import {test,expect  } from "@playwright/test";



const url = "https://sdetqa.vercel.app/autoplay"



test.beforeEach(async ({page})=>
{await page.goto(url)})


test("Test 1 to validate URL", async ({page})=>
{
const allCountry = page.locator('#country')

await expect(allCountry).toBeVisible();
await expect(allCountry).toHaveValue('india')


//Select dropdown value by label
await allCountry.selectOption({label : 'USA'})
await expect(allCountry).toHaveValue('usa')

//Select dropdown by value 

await allCountry.selectOption({value : 'uk'})
await expect(allCountry).toHaveValue('uk')


//Select dropdown by index 


await allCountry.selectOption({index : 3})
await expect(allCountry).toHaveValue('germany')



//Dropdown selection by label and value combination 



await allCountry.selectOption({value : 'france', label : 'France'})
await expect(allCountry).toHaveValue('france')


const optionCount = allCountry.locator('option')
await expect(optionCount).toHaveCount(5)

const allText = await optionCount.allTextContents() 
expect(allText).toContain('USA')


for(const text of allText)
{
    console.log(text)
}


await page.waitForTimeout(5000)



})




test("Multiselect dropdown", async ({page})=>
{

const multiSelectDropdown = page.locator('#colors')

await expect(multiSelectDropdown).toBeVisible();
await expect(multiSelectDropdown).toHaveValue('blue')

// select multidrodown by label 


//await multiSelectDropdown.selectOption([{label : 'Red'},{label : 'Blue'}, {label : 'Yellow'}])

//await page.waitForTimeout(5000)

//select multidrodown by Value 

//await multiSelectDropdown.selectOption([{value : 'red'},{value : 'blue'}, {value : 'yellow'}])



//select multidrodown by Index 

await multiSelectDropdown.selectOption([{index : 0},{index : 1}, {index : 3}])

await expect(multiSelectDropdown).toHaveValues(['red','blue','yellow'])

await page.waitForTimeout(5000)
})




test.only("Sorted dropdown ", async ({page})=>
{

    // const sortedOption = page.locator("#sorted option")
    const sortedOption = page.locator("#colors option")

    const sortedDropdowntext= await sortedOption.allTextContents() // Text extracted in array 

    console.log(sortedDropdowntext)

    const originalSorted = sortedDropdowntext

    const duplicateSorted = [...sortedDropdowntext].sort()

    console.log(originalSorted)
    console.log(duplicateSorted) // sorted array 
    console.log(sortedDropdowntext) // original value 



expect(originalSorted).toEqual(duplicateSorted)








})
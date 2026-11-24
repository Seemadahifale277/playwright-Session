//  getByRole -> if web element is actionable then go for it 


import { test, expect, Locator } from "@playwright/test";



//-------getByRole Locator Example ------------------------------------------------
/* 
test("Navigate to chrome", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const projectRoleText : Locator = page.getByRole('link',{name: 'Projects'})
    await expect(projectRoleText).toBeVisible()

})
*/



//------------getByText-------------------------------

/*
test("Navigate to chrome", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const a = page.getByText('Welcome,',{exact : true})
    //page.getByText('Welcome, Joh',{exact : true})
    await expect(a).toBeVisible()
    
})
*/

//------------------getByLabel---------------------------

/*
test("Navigate to chrome", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const LabelText : Locator = page.getByLabel('First Name')
    await expect(LabelText).toBeVisible()
    await LabelText.fill("john")
    //await page.waitForTimeout(5000)



})
    */

//--------------------------4. getByPlaceholder------------------------------------------------
/*
test("Navigate to chrome", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const placeholderValue : Locator = page.getByPlaceholder('Search tests...')
    await expect(placeholderValue).toBeVisible()
    await placeholderValue.fill("John1111")

await page.waitForTimeout(5000)


})
*/

//--------------------------------getByTitle--------------------------------------------
//Not locating the web element 
test("Navigate to chrome",{tag : '@sanity'}, async ({page})=>
{

await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
 
const titleValue: Locator = page.getByTitle('Total test runs');

await expect(titleValue).toHaveText('4,821Total Runs');
await expect(titleValue).toContainText('4,821')

})


//-----------------------getByaltText-------------------------

 test("Navigate to chrome Text", {tag : '@regression'},async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const altValue : Locator = page.getByAltText('Playwright logo')
    await page.waitForTimeout(5000)
    await expect(altValue).toBeVisible()
    //await page.waitForTimeout(5000)

})


//------------------------------------getByTestID-------------------------------------------

//  test("Navigate to chrome", async ({page})=>
// {

//     await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
//     const altValue : Locator = page.getByTestId('add-to-cart-pro')
//     await page.waitForTimeout(5000)
//     await expect(altValue).toBeVisible()
//     //await page.waitForTimeout(5000)

// })
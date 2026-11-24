import {test,expect  } from "@playwright/test";



const url = "https://sdetqa.vercel.app/autoplay"

test.beforeEach(async ({page})=>
{

await page.goto(url)

})


test("Test 1 to validate URL", async ({page})=>
{

    //await page.goto("https://sdetqa.vercel.app/autoplay")


    //expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
    //const text = page.getByText("AutoPlay")
    //await expect(page.getByText("AutoPlay")).toBeVisible()
})



test("Input box validations test case2" , async({page})=>
{

const name = page.getByLabel("Full name")
const email = page.getByLabel("Email")

await expect(name).toBeVisible()
await expect(name).toBeEnabled()

// validate maxlength 

await expect(name).toHaveAttribute('maxlength','16') // hard  // soft 

await name.fill("kelvin duo")
await expect(name).toHaveValue("kelvin duo")




})


test("test case 3 to validate radio button", async ({page})=>
{

const male = page.locator("#male")
const female = page.locator("#female")

await expect(male).toBeVisible()
await expect(female).toBeVisible()

await male.check();

await expect(male).toBeChecked()

await expect(female).not.toBeChecked()



})






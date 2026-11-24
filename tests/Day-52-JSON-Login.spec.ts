import {test,expect} from "@playwright/test"
import fs from "fs"

// const loginData : string[][] =
// [
//     ["laura.taylor1234@example.com", "test123", "valid"],
//     ["invaliduser@example.com", "test321", "invalid"],
//     ["", "", "invalid"]
// ]


const jsonpath = "tests/storage/loginJSON.json"
const loginData = JSON.parse(fs.readFileSync(jsonpath, "utf-8"))


for(const {email, password, validity} of loginData)
{


test(`Login test for ${email} and ${password}`, async ({page})=>
{


await page.goto("https://demowebshop.tricentis.com/login")

await page.locator("#Email").fill(email)
await page.locator('#Password').fill(password)
await page.locator('[value="Log in"]').click()


if(validity=='valid')
    {
      
        const logOutText = page.locator('.ico-logout')
        await expect(logOutText).toBeVisible()

    }


    else 
    {
        const validationError = page.locator('.validation-summary-errors')
        await expect(validationError).toBeVisible()
    }

})
}
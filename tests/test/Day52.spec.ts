import {test,expect} from "@playwright/test"
import { Day52 } from "../page/Day52";
import fs from "fs"




const jsonpath = "tests/storage/loginJSON.json"
const loginData = JSON.parse(fs.readFileSync(jsonpath, "utf-8"))

for(const {email, password, validity} of loginData)
{


test(`Day52 test case ${email}`, async ({page})=>
{
    // const email = "laura.taylor1234@example.com"
    // const password = "test123"


    const url = process.env.URL
    // const email = process.env.EMAIL
    // const password = process.env.PASSWORD



    // if(!url || !email || !password)
    // {
    //     throw new Error("url or email or password is not defined inside dot env file");
        
    // }

  if(!url)
    {
        throw new Error("url is not defined inside dot env file");
        
    }




await page.goto(url)

const day52 = new Day52(page)
await day52.login(email,password,validity)

const assertion = day52.getValidation()


if(validity=='valid')
    {
      
      
        await expect(assertion.logOutText).toBeVisible()

    }


    else 
    {
        await expect(assertion.validationError).toBeVisible()
    }



})

}
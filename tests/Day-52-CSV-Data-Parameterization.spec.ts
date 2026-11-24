import {test,expect} from "@playwright/test"
import fs from "fs"
import {parse} from "csv-parse/sync"

//import * as XLSX from 'xlsx'

/*
install this command to read csv file in playwright
prerequisite :  npm install csv-parse//
//------------------------------------------------------------------*/



// const loginData : string[][] =
// [
//     ["laura.taylor1234@example.com", "test123", "valid"],
//     ["invaliduser@example.com", "test321", "invalid"],
//     ["", "", "invalid"]
// ]


// const jsonpath = "tests/storage/loginJSON.json"
// const loginData = JSON.parse(fs.readFileSync(jsonpath, "utf-8"))


const csvPath = "tests/storage/data.csv"
const filedata = fs.readFileSync(csvPath, 'utf8');


const loginData : any= parse(filedata,{
    columns : true,
    skip_empty_lines : true
})


//excelPath = "tests/storage/DATA.XLSX"
//const workbook = XLSX.readFile(excelPath)
//const sheetName = workbook.sheetNames[0]
//const worksheet = workbook.Sheets[sheetName]


//const loginData = XLSX.utils.sheet_to_json(worksheet)


//file->workbook->sheet-> rows / column


for(const data of loginData)
{


test(`Login test for ${data.email} and ${data.password}`, async ({page})=>
{


await page.goto("https://demowebshop.tricentis.com/login")

await page.locator("#Email").fill(data.email)
await page.locator('#Password').fill(data.password)
await page.locator('[value="Log in"]').click()


if(data.validity=='valid')
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
import {test,expect} from "@playwright/test"
//port {Day2} from "../page../Day2"

import {Day2} from "../page/Day2"



test("Day2 test case", async ({page})=>
{

await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
const day2 = new Day2(page)
//await day2.day2titleValue()

const a = await day2.gettitleValue()

await expect(a).toHaveText('4,821Total Runs');




// await expect(titleValue).toHaveText('4,821Total Runs');
// await expect(titleValue).toContainText('4,821')



})
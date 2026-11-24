/*
Syntax : For playwright Script


import {test , expect} from "@playwright/test"


test("1st argument is test case name",  ()=> 
{

//stmt1
//stmt2

})
*/


// Example 1


/*
import { test, expect } from "@playwright/test";

test("Navigate to chrome", async ({page})=>
{

await page.goto("https://www.google.com") // to navigate mentioned url
await expect(page).toHaveTitle("Google")  // To validate the title of page


})

*/
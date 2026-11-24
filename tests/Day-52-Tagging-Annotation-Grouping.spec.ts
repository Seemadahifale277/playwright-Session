// Grouping 
import { test, expect } from '@playwright/test';
/* 
test.describe('Test Suite 1', ()=> {


test('test case 1', async ({page})=>  {
    console.log("test case 1")
})




test('test case 2', async ({page})=>  {
console.log("test case 2")
})


})
*/

// command to run the test case -> npx playwright test --grep "test case 2"


// Annotations 

// 1. only 
// 2. skip  : -> intentionally skip the test case
// 3. fixme : -> skip 
// 4. slow  : -> 
// 5. fail  : -> 

// by default 30sec 

// test("slow annotation", async ({page})=>
// {
//     // 90 sec 
//     await page.goto("https://playwright.dev/")
//     expect(page).toHaveTitle(/Playwright/)
  

   

// })


// Tagging : 
 
test('test case 1' , { tag : '@sanity' }, async ({page})=>  {
    console.log("test case 1")
})


//npx playwright test --grep "@sanity"  -> run the test case with tag @sanity






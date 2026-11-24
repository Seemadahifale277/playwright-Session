import {test,expect  } from "@playwright/test";

test("hidden dropdown", async ({page})=>
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Enter Username 

    await page.locator("input[name='username']").fill("Admin")

    //Enter Password 
  
    await page.locator("input[name='password']").fill("admin123")

    // Click on login button 

    await page.locator("button[type='submit']").click()

    await expect(page.getByRole('link', {name : 'PIM'})).toBeVisible()
    await page.getByRole('link', {name : 'PIM'}).click() 

     const jobTitleDropdown = page.locator("div[class='oxd-select-text-input']").nth(2)

     //const jobTitleDropdown =  page.locator('i.oxd-icon.bi-caret-up-fill.oxd-select-text--arrow') // selector hub locator
     await jobTitleDropdown.click()


     // check wheather values present inside the dropdown 


     const jobTitleValues = page.locator("div[role='listbox'] span")
     await expect(jobTitleValues.first()).toBeVisible();

    const jobTitleCount = await jobTitleValues.count()
    console.log("jobTitleValues", jobTitleCount)

    const text = await jobTitleValues.allTextContents()
    console.log(text)

    for(let i=0; i<jobTitleCount;i++)
    {
        const jobTitle = jobTitleValues.nth(i)
       const text1 = await jobTitle.textContent()
       console.log(text1)

       if(text1=='Automaton Tester')
       {
        await jobTitle.click()
        break;
       }


    }
   

})




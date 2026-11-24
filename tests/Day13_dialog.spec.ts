import {test,expect } from "@playwright/test";

test("Simple pop up validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")
 const popup = page.locator('button#PopUp')// open pop up


 popup.click()
const popupbox = page.locator('div.popup-card')
expect(popup).toBeVisible()

await expect( popupbox.getByText('No, maybe next time')).toBeVisible()
//await page.locator("[onclick='closePopup()']").click()

await popupbox.getByRole('button',{name : 'Yes' }).click()

})

test("Simple Alert  validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    page.on('dialog',dialog =>
         {
            expect(dialog.type()).toBe('alert')
            expect (dialog.message()).toContain('Simple alert!')
            dialog.accept()
        })

        await page.getByRole('button',{name : 'Simple'}).click()

})



test("Confirmation Alert  validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    await page.waitForTimeout(5000)

page.on('dialog',dialog => 
         {
           console.log(dialog.type())
           //expect(dialog.type()).toBe('')
            dialog.accept()
        })


       await page.getByRole('button',{name : 'Confirm'}).click()


})


test.only("Prompt Alert  validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    await page.waitForTimeout(5000)

    page.on('dialog',dialog =>{
        if(dialog.type()==='prompt')
         {
           //console.log(dialog.type())
           //expect(dialog.type()).toBe('')
           
            dialog.accept("Test Prompt Alert")
         }
else if(dialog.type()==='alert')
         {
            //console.log(dialog.type())
            //expect(dialog.type()).toBe('')
            dialog.accept()
         }


        })

       await page.getByRole('button',{name : 'Prompt'}).click()



    })
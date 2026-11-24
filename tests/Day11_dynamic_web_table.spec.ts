import {test,expect } from "@playwright/test";

test("Test Case 1  Internet Explorer CPU Usage Validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")
     const tablerow= await page.locator('#taskTable tbody tr').all()    //4
      expect(tablerow.length).toBeGreaterThan(0)




let cpuload;
      for(const row of tablerow)
        {
           const productName = await row.locator('td').nth(0).innerText()

           //if(productName==='Internet Explorer')

           if(productName==='Chrome')
           {
                cpuload = await row.locator('td',{hasText: '%'}).innerText()
               const expectedcpuload = await page.locator('strong.chrome-cpu').innerText()
               expect(cpuload).toBe(expectedcpuload)
         
          
           }   

        }
      console.log(cpuload)

    })





test.only("Test Case 2  System Memory Usage Validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

const tablerow= await page.locator('#taskTable tbody tr').all()    //4
      expect(tablerow.length).toBeGreaterThan(0)



let memory;
      for(const row of tablerow)
        {
           const productName = await row.locator('td').nth(0).innerText()

           if(productName==='System')
           {
                memory = await row.locator('td',{hasText: /MB$/}).innerText()
            //    const expectedmemory = await page.locator('strong.chrome-cpu').innerText()
            //    expect(memory).toBe(expectedmemory)
         
          
           }   

        }






})
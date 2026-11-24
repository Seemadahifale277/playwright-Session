// Frame 

// frame, iframe (Inline frame)


// 1) page.frame()  -> not autowaited -> not recommend -> returns null if gets delay to load page
// 2)page.framelocator() -> auto waited
// 3) page.frames() // returns all the frames






import {test,expect } from "@playwright/test";


test("Frame", async ({page})=>
{
  
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames =  page.frames()
    console.log(frames.length)


   // approach 1


    const frame1 = page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1"}) //1


    // page.locator('frameset').locator('frame').nth(0) //2
    // page.locator('[src="frame_1.html"]')//3


if(frame1)
{
    await frame1.locator('[name="mytext1"]').fill("test1")
}
else
{
    console.log("frame is not available")
}

// Approach 2 -> framelocator

const framelocatorText = page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]')

await framelocatorText.fill("test")


})




test("Child frame", async ({page})=>
{
   
  await page.goto("https://ui.vision/demo/webtest/frames/")

const framelocator3 = page.frameLocator('[src="frame_3.html"]')

const childframe = framelocator3.frameLocator('iframe')

await childframe.getByRole('radio',{name : 'Hi, I am the UI.Vision IDE'}).check()

await page.waitForTimeout(5000)

})




test.only("Nested Frame", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    //const frame = page.frameLocator('iframe').first()// deprecated

const frame = page.locator('iframe').nth(0).contentFrame()

const innerframe = frame.frameLocator('iframe').locator("#innerInput")

await innerframe.fill("test1")

await page.waitForTimeout(5000)

})

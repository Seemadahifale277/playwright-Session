import {test,expect } from "@playwright/test";


test("Mouse action validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

const toggle = page.locator('#toggleBtn')
const toggleText1 = await toggle.textContent()  //STOP

await toggle.click()

//page.mouse.click(X,Y)  // not rexommended

const toggleText2 = await toggle.textContent() // START

expect(toggleText2).not.toBe(toggleText1)

await page.waitForTimeout(5000)


})

//----------------------------Right Click -------------------------



test("Mouse Right click action validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const rightClick = page.locator('#rightClickBtn')

    await rightClick.click({button : 'right'})   // left , right , middle

    const allText = await page.locator('#customContextMenu button').allInnerTexts()

    console.log(allText)

    const pageMenuEdit = page.getByRole('button', {name : 'Edit'})


page.on('dialog', dialog =>{

    dialog.accept()
})


    await pageMenuEdit.click()

})

//-------------------hover-------------------------



test("Mouse hover action validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

//const buttonHover = page.getByTitle("This is a tooltip")

const buttonHover = page.locator('span:has-text("Hover me")')

await buttonHover.hover()
await page.waitForTimeout(5000)
await expect(buttonHover).toBeVisible()

//await page.waitForTimeout(5000)


console.log(await buttonHover.getAttribute('title'))

 expect(await buttonHover.getAttribute('title')).toBe("This is a tooltip")



})



test("Mouse double click action validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")


    const field1 = page.locator("#field1")
    const field2 = page.locator("#field2")
    const copyclick = page.getByRole('button', {name : 'Copy Text'})

    await field1.fill("test1");
    await copyclick.dblclick() // double click 

    await page.waitForTimeout(5000)

    await expect(field2).toHaveValue("test1")


})


test("Mouse drag  action validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")

const source = page.getByText("Drag me")
const target = page.getByText("Drop zone")


await source.dragTo(target)





})

//--------------------------keyboard -------------------------



test.only("keyboard action validation", async ({page})=>
{


// 1. down
// 2.press
// 3. up


// Keyboard.press

    await page.goto("https://gotranscript.com/text-compare")

const input1 = page.locator('[name="text1"]')
// click 
await input1.focus()
//value inserted
await page.keyboard.insertText("test1") //one time
//await page.keyboard.type("test1") // char by char

// ctrl + A
// await page.keyboard.down('Control')
// await page.keyboard.press("A")
// await page.keyboard.up('Control')

await page.keyboard.press("Control+A")


// ctrl + C 

// await page.keyboard.down('Control')
// await page.keyboard.press("C")
// await page.keyboard.up('Control')
await page.keyboard.press("Control+C")

// tab

await page.keyboard.press('Tab')


// ctrl + V

// await page.keyboard.down('Control')
// await page.keyboard.press("V")
// await page.keyboard.up('Control')
await page.keyboard.press("Control+V")

})



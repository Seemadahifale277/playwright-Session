import { test, expect  } from "@playwright/test";


// Filter data for product 2 button 



test.beforeEach(async ({page})=>
{
    await page.goto("https://sdetqa.vercel.app/filters_practice")
})

test.afterEach(async ({page})=>
{

await page.close()

})








test("Verify Filter Locator demo test case 1", async ({page})=>
{

//await page.goto("https://sdetqa.vercel.app/filters_practice")

const Prod2 = page.getByRole('listitem').filter({hasText : 'Product 2'}).getByRole('button',{name : 'Add to cart'})

await expect(Prod2).toBeVisible()
await Prod2.click()
//await page.close()


})




// Ex2 - Filter data with has not text 


test("Verify Filter Locator demo test case 2", async ({page})=>
{

//await page.goto("https://sdetqa.vercel.app/filters_practice")

const outOfStock = page.locator(".card").nth(1).getByRole('listitem').filter({hasNotText : 'Out of stock'})//first(),last()

await expect(outOfStock).toHaveCount(3)
//await page.close()


})


test.only("Verify Filter Locator demo test case 3", async ({page})=>
{

const testid=page.locator('[data-testid]')

const firstValue = testid.first()
const lastValue = testid.last()
const nthValue = testid.nth(4)

console.log(await firstValue.innerText(), await lastValue.innerText(), await nthValue.innerText())

await expect(testid).toHaveCount(5)



})
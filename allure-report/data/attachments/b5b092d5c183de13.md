# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day6_Ui_Validations.spec.ts >> Input box validations test case2
- Location: tests\Day6_Ui_Validations.spec.ts:28:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  getByLabel('Full name')
Expected: "16"
Received: "15"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" getByLabel('Full name') with timeout 5000ms
  - waiting for getByLabel('Full name')
    13 × locator resolved to <input id="name" type="text" maxlength="15" value="John Doe" placeholder="John Doe"/>
       - unexpected value "15"

```

```yaml
- textbox "Full name":
  - /placeholder: John Doe
  - text: John Doe
```

# Test source

```ts
  1  | import {test,expect  } from "@playwright/test";
  2  | 
  3  | 
  4  | 
  5  | const url = "https://sdetqa.vercel.app/autoplay"
  6  | 
  7  | test.beforeEach(async ({page})=>
  8  | {
  9  | 
  10 | await page.goto(url)
  11 | 
  12 | })
  13 | 
  14 | 
  15 | test("Test 1 to validate URL", async ({page})=>
  16 | {
  17 | 
  18 |     //await page.goto("https://sdetqa.vercel.app/autoplay")
  19 | 
  20 | 
  21 |     //expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
  22 |     //const text = page.getByText("AutoPlay")
  23 |     //await expect(page.getByText("AutoPlay")).toBeVisible()
  24 | })
  25 | 
  26 | 
  27 | 
  28 | test("Input box validations test case2" , async({page})=>
  29 | {
  30 | 
  31 | const name = page.getByLabel("Full name")
  32 | const email = page.getByLabel("Email")
  33 | 
  34 | await expect(name).toBeVisible()
  35 | await expect(name).toBeEnabled()
  36 | 
  37 | // validate maxlength 
  38 | 
> 39 | await expect(name).toHaveAttribute('maxlength','16') // hard  // soft 
     |                    ^ Error: expect(locator).toHaveAttribute(expected) failed
  40 | 
  41 | await name.fill("kelvin duo")
  42 | await expect(name).toHaveValue("kelvin duo")
  43 | 
  44 | 
  45 | 
  46 | 
  47 | })
  48 | 
  49 | 
  50 | test("test case 3 to validate radio button", async ({page})=>
  51 | {
  52 | 
  53 | const male = page.locator("#male")
  54 | const female = page.locator("#female")
  55 | 
  56 | await expect(male).toBeVisible()
  57 | await expect(female).toBeVisible()
  58 | 
  59 | await male.check();
  60 | 
  61 | await expect(male).toBeChecked()
  62 | 
  63 | await expect(female).not.toBeChecked()
  64 | 
  65 | 
  66 | 
  67 | })
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Day2.spec.ts >> test case
- Location: tests\tests\Day2.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "url", waiting until "load"

```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { Day2 } from "../pages/Day2";
  3  | 
  4  | test("test case", async ({page})=>
  5  | {
  6  | const url = process.env.URL
> 7  | await page.goto("url")
     |            ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  | await page.waitForTimeout(5000)
  9  | 
  10 | const day2 = new Day2(page)
  11 | 
  12 | await day2.validationDay2();
  13 | await expect(day2.titleValue).toHaveText('4,821Total Runs');
  14 | await expect(day2.titleValue).toContainText('4,821')
  15 | 
  16 | })
```
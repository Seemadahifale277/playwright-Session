# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Day2.spec.ts >> test case
- Location: tests\tests\Day2.spec.ts:5:5

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
  3  | import 'dotenv/config';
  4  | 
  5  | test("test case", async ({page})=>
  6  | {
  7  | const url = process.env.URL
  8  | console.log(url)
> 9  | await page.goto("url")
     |            ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  10 | await page.waitForTimeout(5000)
  11 | 
  12 | const day2 = new Day2(page)
  13 | 
  14 | await day2.validationDay2();
  15 | await expect(day2.titleValue).toHaveText('4,821Total Runs');
  16 | await expect(day2.titleValue).toContainText('4,821')
  17 | 
  18 | })
```
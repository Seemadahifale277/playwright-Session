# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Day2.spec.ts >> test case
- Location: tests\tests\Day2.spec.ts:5:5

# Error details

```
Error: URL is undefined. Set URL in the project-root .env file or the environment.
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { Day2 } from "../pages/Day2";
  3  | //import 'dotenv/config';
  4  | 
  5  | test("test case", async ({page})=>
  6  | {
  7  | const url=process.env.URL
  8  | 
  9  | if(!url)
  10 | {
> 11 |     throw new Error('URL is undefined. Set URL in the project-root .env file or the environment.')
     |           ^ Error: URL is undefined. Set URL in the project-root .env file or the environment.
  12 | }
  13 | await page.goto(url)
  14 | await page.waitForTimeout(5000)
  15 | 
  16 | const day2 = new Day2(page)
  17 | 
  18 | await day2.validationDay2();
  19 | await expect(day2.titleValue).toHaveText('4,821Total Runs');
  20 | await expect(day2.titleValue).toContainText('4,821')
  21 | 
  22 | })
```
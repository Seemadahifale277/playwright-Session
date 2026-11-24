# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\Day52.spec.ts >> day 52 
- Location: tests\test\Day52.spec.ts:21:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ico-logout')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.ico-logout') with timeout 5000ms
  - waiting for locator('.ico-logout')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Welcome, Please Sign In!" [level=1]
- strong: New Customer
- text: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
- button "Register"
- strong: Returning Customer
- text: Login was unsuccessful. Please correct the errors and try again.
- list:
  - listitem: No customer account found
- text: "Email:"
- textbox "Email:"
- text: "Password:"
- textbox "Password:"
- checkbox "Remember me?"
- text: Remember me?
- link "Forgot password?":
  - /url: /passwordrecovery
- button "Log in"
- heading "About login / registration" [level=2]
- paragraph: Put your login / registration information here. You can edit this in the admin site.
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { Day52 } from "../page/Day52";
  3  | import fs from "fs";
  4  | const url = "https://demowebshop.tricentis.com/login"
  5  | 
  6  | 
  7  | test.beforeEach( async ({page})=>
  8  | {
  9  | await page.goto(url)
  10 | })
  11 | 
  12 | 
  13 | const jsonpath = "tests/storage/loginJSON.json"
  14 | const loginData = JSON.parse(fs.readFileSync(jsonpath, "utf-8"))
  15 | 
  16 | 
  17 | for(const {email, password, validity} of loginData)
  18 | {
  19 | 
  20 | 
  21 | test(`day 52 ${email}` , async ({page})=>
  22 | {
  23 | 
  24 | // const url = process.env.URL
  25 | // const email = process.env.EMAIL
  26 | // const password = process.env.PASSWORD
  27 | 
  28 | // if (!url || !email || !password) 
  29 | //     {
  30 | //         throw new Error("URL, EMAIL, and PASSWORD environment variables must be set")
  31 | //     }
  32 | 
  33 | //const url = "https://demowebshop.tricentis.com/login"
  34 | 
  35 | //await page.goto(url)
  36 | 
  37 | const day52 = new Day52(page)
  38 | const text = day52.getLocator()
  39 | await day52.Login(email,password,validity)
  40 | 
  41 | if(validity=='valid')
  42 |     {
  43 |       
  44 |         await expect(text.logOutText).toBeVisible()
  45 | 
  46 |     }
  47 | 
  48 | 
  49 |     else 
  50 |     {
  51 |         await expect(text.validationError).toBeVisible()
  52 |     }
  53 | 
  54 | await page.waitForTimeout(5000)
  55 | //const text = day52.getLocator()
  56 | 
> 57 | await expect(text.logOutText).toBeVisible()
     |                               ^ Error: expect(locator).toBeVisible() failed
  58 | 
  59 | 
  60 | 
  61 | 
  62 | })
  63 | }
```
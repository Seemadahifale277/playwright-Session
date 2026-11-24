import { test, expect } from '@playwright/test';
import fs from 'fs'
import { parse } from 'csv-parse/sync';

// const loginTestData: string[][] = [
//     ["laura.taylor1234@example.com", "test123", "valid"],
//     ["invaliduser@example.com", "test321", "invalid"],
//     ["validuser@example.com", "testxyz", "invalid"],
//     ["", "", "invalid"],
// ];





const csvPath = "tests/storage/data.csv"
const fileData = fs.readFileSync(csvPath, 'utf8');


const recorddata : any[] = parse(fileData,
                 {
                    columns : true,
                    skip_empty_lines : true
                 }
)



for (const data of recorddata) 
    {

        test(`Login1 test for ${data.email} and ${data.password}`, async ({ page }) => 
            {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill login form
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.validity.toLowerCase() === 'valid') {

                // Assert logout link is visible - indicates successful login
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });

            } else 
                {

                // Assert error message is visible
                const errorMessage = page.locator('.validation-summary-errors');
                await expect(errorMessage).toBeVisible({ timeout: 5000 });

                // Assert user is still on the login page
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }

        });

    

}
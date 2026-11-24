import { test, expect } from '@playwright/test';

test.describe('Dynamic Table Validations', () => 
    {

  test.beforeEach('Navigate to the File Upload page', async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/autoplay.html');
    await expect(page.getByText('AutoPlay')).toBeVisible();
  });





  

  test('Test Case 1: Chrome CPU Load Validation', async ({ page }) => {
    const rows = await page.locator('table#taskTable tbody tr').all();

    // Basic validations
    expect(rows.length).toBeGreaterThan(0);

    let cpuLoad = '';

    //for (const row of rows) {

    for(let i=0;i<rows.length;i++)
    {
      const processName = await rows[i].locator('td').nth(0).innerText();
      if (processName === 'Chrome') {
        cpuLoad = await rows[i].locator("td", { hasText: '%' }).innerText();
        const expectedCpu = await page.locator('strong.chrome-cpu').innerText();
        expect(cpuLoad).toBe(expectedCpu);
        break;
      }
    }

    // Validate Chrome row found
    expect(cpuLoad).not.toBe('');

    // Validate format
    expect(cpuLoad).toContain('%');

    const label = page.locator('strong.chrome-cpu');

    // Validate label visible
    await expect(label).toBeVisible();

    // Final validation
    await expect(label).toContainText(cpuLoad);
  });



    })
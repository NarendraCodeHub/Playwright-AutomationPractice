import { test, expect } from '@playwright/test';

test('Validate JavaScript Delays', async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.getByRole('link', { name: 'JavaScript Delays' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'JavaScript Delays' })).toBeVisible();

    await page.locator('button#start').click();

    const countdownElement = page.locator('#delay');
    await expect(countdownElement).toHaveText('Liftoff!', { timeout: 30000 });
});

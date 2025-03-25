import { test, expect } from '@playwright/test';

test('Test and Validate Click Events', async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Click Events' }).click();
    
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Click Events' })).toBeVisible();

    const clickEvents = {
        'Cat': 'Meow!',
        'Dog': 'Woof!',
        'Pig': 'Oink!',
        'Cow': 'Moo!'
    };

    for (const [buttonName, expectedText] of Object.entries(clickEvents)) {
        await page.getByRole('button', { name: buttonName }).click();
        await expect(page.getByRole('heading', { name: expectedText })).toBeVisible({ timeout: 5000 });
    }
});

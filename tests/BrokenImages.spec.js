import { test, expect } from '@playwright/test';

test('Check for Broken Images', async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Broken Images' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Broken Images' })).toBeVisible();

    const imageLinks = await page.locator('img').evaluateAll((images, currentUrl) =>
        images.map(img => new URL(img.src, currentUrl).href), page.url()
    );

    console.log(`Total Images Found: ${imageLinks.length}`);

    for (const imgSrc of imageLinks) {
        console.log(`Checking: ${imgSrc}`);

        const response = await page.request.get(imgSrc);

        if (!response.ok()) {
            console.error(`BROKEN IMAGE: ${imgSrc} - Status: ${response.status()}`);
        } else {
            console.log(`Valid Image: ${imgSrc} - Status: ${response.status()}`);
        }
    }
});

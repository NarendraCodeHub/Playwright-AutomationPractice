import { test, expect } from '@playwright/test';

test('Test and Validate Accordions', async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Accordions' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Accordions' })).toBeVisible();

    const accordionTitle = page.locator('.wp-block-coblocks-accordion-item__title');
    await accordionTitle.click();

    const accordionContent = page.locator('.wp-block-coblocks-accordion-item__content');
    await expect(accordionContent).toBeVisible();

    await expect(accordionContent).toHaveText('This is an accordion item.', { timeout: 5000 });
});

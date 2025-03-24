import { test, expect } from '@playwright/test';

test('Test ', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

});
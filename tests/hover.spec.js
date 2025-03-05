import { test, expect } from '@playwright/test';

test('Test Hover and Validate Hover Text', async ({ page, baseURL }) => {

  await page.goto(baseURL);

  await page.locator("a:text('Hover')").click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('heading', { name: 'Hover' })).toBeVisible();

  await page.getByRole('heading', { name: 'Mouse over me' }).hover();

  await expect(page.locator("text='You did it!'")).toBeVisible();

  await page.getByRole('link', { name: 'hover over elements' }).hover();

  await expect(page.getByRole('heading', { name: 'Mouse over me' })).toBeVisible();

});
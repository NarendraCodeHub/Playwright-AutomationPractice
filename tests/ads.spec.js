import { test, expect } from '@playwright/test';

test('Test and Validate Ads', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  await page.getByRole('link', { name: 'Ads' }).click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByRole('heading',{name : 'Ads' })).toBeVisible();

  await page.waitForTimeout(2000);

  await page.waitForSelector('#popmake-1272', { state: 'visible' });

  const adsText = await page.locator('#popmake-1272 .pum-content').textContent();
  await  expect(adsText).toContain('I am an ad.');

  await page.click('#popmake-1272 button.pum-close');

  await page.waitForSelector('#popmake-1272', { state: 'hidden' });

});
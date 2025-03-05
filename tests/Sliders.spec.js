import { test, expect } from '@playwright/test';

test('Move slider and validate value', async ({ page, baseURL }) => {

    await page.goto(baseURL); 

    await page.getByRole('link', { name: 'Sliders' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Slider'})).toBeVisible();

    const slider = page.locator('#slideMe');
    const valueDisplay = page.locator('#value');

    // Set slider value to 50
    await slider.evaluate((el, newValue) => el.value = newValue, '50');
    await slider.dispatchEvent('input'); 

    // Validate the displayed value : 50
    await expect(valueDisplay).toHaveText('50'); 

    // Set slider value to 100
    await slider.evaluate((el, newValue) => el.value = newValue, '100');
    await slider.dispatchEvent('input');

    // Validate the displayed value : 100
    await expect(valueDisplay).toHaveText('100'); 
 
    // Set slider value to 0
    await slider.evaluate((el, newValue) => el.value = newValue, '0');
    await slider.dispatchEvent('input');

    // Validate the displayed value : 0
    await expect(valueDisplay).toHaveText('0');   
});

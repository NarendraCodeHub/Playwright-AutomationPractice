import { test, expect } from '@playwright/test';

/**
 * Alert Popup
 */ 

test('Test Alert Popup', async ({ page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups'})).toBeVisible();

    await page.getByRole('button', { name: 'Alert Popup'}).click();

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('OK or Cancel, which will it be?');
        await dialog.accept();
    });
});

/**
 * Confirm Popup
*/

test('Accept Confirm Popup', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    const confirmPopup = page.getByRole('button', { name: 'Confirm Popup'});

    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('OK or Cancel, which will it be?');
        await dialog.accept(); 
    });

    await confirmPopup.click();

    await expect(page.getByText('OK it is!')).toBeVisible();

});

test('Dismiss Confirm Popups', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    const confirmPopup = page.getByRole('button', { name: 'Confirm Popup' });


    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('OK or Cancel, which will it be?');
        await dialog.dismiss();
    });
    
    // Confirm Popup -> Dismiss 

    await confirmPopup.click();

    await expect(page.getByText('Cancel it is!')).toBeVisible();

});

/**
 * Prompt Popup
 */

test('Accept Prompt Popup', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    const promtBtn = page.getByRole('button', { name: 'Prompt Popup'});

    page.once('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        await dialog.accept(); 
    });

    // Prompt Popup -> Accept 
    await promtBtn.click();

    await expect(page.getByText('Fine, be that way...')).toBeVisible();
});

test('Dismiss Prompt Popup', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    const promtBtn = page.getByRole('button', { name: 'Prompt Popup' });

    page.once('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        await dialog.dismiss();
    });

    // Prompt Popup -> Dismiss 
    await promtBtn.click();

    await expect(page.getByText('Fine, be that way...')).toBeVisible();
});

test('Accept Prompt Popup with Text', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    const promtBtn = page.getByRole('button', { name: 'Prompt Popup' });

    page.once('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        await dialog.accept('Narendra Kumar'); 
    });

    // Prompt Popup -> Accept with Type Text
    await promtBtn.click();

    page.on('dialog', async dialog => {
        console.log(`Prompt message: ${dialog.message()}`);
        await dialog.accept('Narendra Kumar');
    });

    await expect(page.getByText('Nice to meet you, Narendra Kumar!')).toBeVisible();

});

/**
  * << click me to see a tooltip >>
  */

test('Verify Tooltip', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Popups' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();

    await page.locator('.tooltip_1').click();

    await expect(page.locator('#myTooltip')).toContainText('Cool text');


});

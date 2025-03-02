import { test, expect } from '@playwright/test';

test('Test & Validate Form Fields', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Form Fields' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Form Fields' })).toBeVisible();

    await page.locator('#name-input').fill('ABC')

    await page.getByLabel('Password').fill('P@ssWord');

    // What is your favorite drink?
    await page.locator('input[value = "Coffee"]').check();

    // What is your favorite color?
    await page.locator('input[value = "Blue"]').check();

    // Do you like automation?
    const automationDropDown = page.locator('#automation');
    await automationDropDown.selectOption('yes');

    await page.locator('#email').fill('test@gmail.com');

    const message = 'Hello Dude !!!'
    await page.locator('#message').fill(message);

    await page.locator('#submit-btn').click();

    // Listen for the alert
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('Message received!'); 
        await dialog.accept(); 
    });
});
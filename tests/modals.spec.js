import { test, expect } from '@playwright/test';   

test("Simple Modal Test", async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Modals' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Modals'})).toHaveText('Modals');

    await page.getByRole('button', { name: 'Simple Modal' }).click();

    await page.waitForSelector('#popmake-1318', { state: 'visible' });

    const modalText = await page.locator('#popmake-1318 .pum-content').textContent();
    expect(modalText).toContain('Hi, I’m a simple modal.');

    await page.click('#popmake-1318 button.pum-close');

    await page.waitForSelector('#popmake-1318', { state: 'hidden' });;

});

test("Form Modal Test", async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Modals' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Modals'})).toHaveText('Modals');

    await page.getByRole('button', { name: 'Form Modal' }).click();

    await page.waitForSelector('#popmake-674', { state: 'visible' });

    const modalText = await page.locator('#popmake-674  .pum-title').textContent();
    expect(modalText).toContain('Modal Containing A Form');

    await page.locator('#popmake-674 .pum-close').click();

    await page.waitForSelector('#popmake-674', { state: 'hidden' });

    await page.getByRole('button', { name: 'Form Modal' }).click();

    await page.waitForSelector('#popmake-674', { state: 'visible' });

    expect(modalText).toContain('Modal Containing A Form');

    await page.locator('#popmake-674 input[name="g1051-name"]').fill('John Doe');

    await page.locator('#popmake-674 input[name="g1051-email"]').fill('john.doe@example.com');

    await page.locator('#popmake-674 textarea[name="g1051-message"]').fill('This is a test message.');

    await page.locator('#popmake-674 button.pushbutton-wide').click();

    await page.waitForSelector('#popmake-674', { state: 'hidden' });;

});
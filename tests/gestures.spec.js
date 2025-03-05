import { test, expect } from '@playwright/test';

test('Test and Validate Gestures', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

    const draggable = page.locator('#moveMeHeader'); 

    const boundingBox = await draggable.boundingBox();
    if (!boundingBox) throw new Error('Element not found');

    await page.mouse.move(boundingBox.x + 50, boundingBox.y + 50);
    await page.mouse.down();

    await page.waitForTimeout(3000);

    await page.mouse.move(boundingBox.x + 100, boundingBox.y + 100);
    await page.mouse.up();

});

test('Test Gestures', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

});

test('Test', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

    const dragMe = page.locator('#div1');

    const dropMe = page.locator('#div2');

    await dragMe.dragTo(dropMe);

    await expect(dropMe).toHaveAttribute('id',"dragMe");

});


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


test('Drag and Drop Image Validation', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

    const dragMe = page.locator('#div1');

    const dropMe = page.locator('#div2');

    await dragMe.dragTo(dropMe);

    await expect(dropMe.locator('img#dragMe')).toBeVisible();
    
});

test('Test Drag the map in any direction', async ({ page, baseURL }) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name: 'Gestures' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Gestures' })).toBeVisible();

    await page.reload();

    await page.waitForLoadState('networkidle');

    const mapCanvas = page.locator('canvas.syrup-canvas');
    await mapCanvas.waitFor({ state: 'visible', timeout: 30000 });  

    await mapCanvas.scrollIntoViewIfNeeded();

    const beforePosition = await mapCanvas.evaluate(el => el.getBoundingClientRect().x);

    // Perform the drag action
    await page.mouse.move(beforePosition + 100, 200);  
    await page.mouse.down();
    await page.mouse.move(beforePosition + 400, 200, { steps: 20 });  
    await page.mouse.up();

    await page.waitForTimeout(1000);

});


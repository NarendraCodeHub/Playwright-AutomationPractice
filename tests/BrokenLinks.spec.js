import {test, expect} from '@playwright/test';

test('Test Broken Links and Validate', async({page, baseURL}) => {

    await page.goto(baseURL);

    await page.getByRole('link', { name:'Broken Links'}).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'Broken Links'})).toBeVisible();

    const links = await page.locator('a').evaluateAll((anchors) =>
        anchors.map(anchor => anchor.href).filter(href => href.startsWith('http'))
    );

    console.log(`Total Links Found: ${links.length}`);

    for (const link of links) {
        console.log(`Checking: ${link}`);

        const response = await page.request.get(link);

        if (!response.ok()) {
            console.error(` BROKEN LINK: ${link} - Status: ${response.status()}`);
        } else {
            console.log(` Valid Link: ${link} - Status: ${response.status()}`);
        }
    }
});
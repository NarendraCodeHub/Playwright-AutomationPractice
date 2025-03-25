import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test.skip('Bulk File Upload and Validation', async ({ page, baseURL }) => {
    await page.goto(baseURL);

    await page.getByRole('link', { name: 'File Upload' }).click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('heading', { name: 'File Upload' })).toBeVisible();

    const fileUpload = page.locator('input#file-upload');
    const uploadBtn = page.locator('input#upload-btn');

    const errorMsg = page.getByText('Please fill out this field.');
    const successMsg = page.getByText('Thank you for your message. It has been sent.');

    // Define Test-data folder path
    const testDataPath = path.join(__dirname, "../Test-data");

    const getAllFiles = (dirPath, filesList = []) => {
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const filePath = path.join(dirPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                getAllFiles(filePath, filesList);
            } else {
                filesList.push(filePath);
            }
        });
        return filesList;
    };

    const allFiles = getAllFiles(testDataPath);

    for (const filePath of allFiles) {
        console.log(`Uploading: ${filePath}`);

        await fileUpload.setInputFiles(filePath);
        await uploadBtn.click();

        try {
            await expect(successMsg).toBeVisible({ timeout: 10000 });
            console.log(`Upload Successful: ${filePath}`);
        } catch {
            await expect(errorMsg).toBeVisible({ timeout: 10000 });
            console.log(`Upload Failed: ${filePath}`);
        }

        await page.reload();

        await page.waitForLoadState('domcontentloaded');
    }
});

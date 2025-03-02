// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: { timeout: 20 * 1000 },

  outputDir: "./test-results",

  /* Normal Test Report
  reporter: [
    [
      "html",
      {
        outputFolder: "./playwright-report",
      },
    ],
  ],
*/

// Allure Reporting
  reporter: [
    ['list'],  // Default console output
    ['allure-playwright'], // Add Allure reporting
  ],
  
  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  use: {

    baseURL: 'https://practice-automation.com/',

    screenshot: { mode: "only-on-failure", fullPage: true },
   
    video: "retain-on-failure",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    
  ],

});


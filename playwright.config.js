// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = defineConfig({
  testDir: "./tests", // Test directory
  timeout: 30 * 1000, // Time limit for tests (30 seconds)
  expect: {
    timeout: 5000, // Time limit for assertions (5 seconds)
  },
  reporter: "html", // HTML reporting
  use: {
    actionTimeout: 0,
    baseURL: "http://www.automationpractice.pl/index.php", // Website base URL
    headless: false,
    screenshot: "only-on-failure",
    trace: "retain-on-failure", // Tracking in case of failure
    viewport: { width: 1280, height: 720 }, // Screen size
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});

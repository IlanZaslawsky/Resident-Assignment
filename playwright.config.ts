import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? '50%' : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://qa.awarasleep.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        userAgent: 'E2EUI-Tests'
      },
      testMatch: '**/ui/**/*.spec.ts',
    },
    {
      name: 'api',
      use: {
        baseURL: 'https://qa-api.residenthome.com',
      },
      testMatch: '**/api/**/*.spec.ts',
    },
  ],
});
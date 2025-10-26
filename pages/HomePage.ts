import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TEST_CONFIG } from '../config/test-config';
import { logger } from '../utils/logger';

export class HomePage extends BasePage {
  private readonly url = `${TEST_CONFIG.urls.uiBase}/`;

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    logger.action(`Navigating to home page: ${this.url}`);
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Page loaded');
    await this.dismissModalIfPresent();
  }

  async verifyPageLoaded() {
    logger.verify('Verifying home page loaded');
    await expect(this.page).toHaveURL(this.url);
    logger.info('Home page verified');
  }
}


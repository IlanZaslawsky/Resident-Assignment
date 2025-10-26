import { Page } from '@playwright/test';
import { logger } from '../utils/logger';

export class BasePage {
  constructor(protected page: Page) {}

  async dismissModalIfPresent() {
    const modal = this.page.locator('.dy-modal-container.dy-act-overlay');

    if (await modal.isVisible()) {
      logger.action('Dismissing modal');
      const closeButton = this.page.locator('.dy-lb-close');
      await closeButton.click();
      await modal.waitFor({ state: 'hidden', timeout: 5000 });
      logger.info('Modal dismissed');
    }
  }
}


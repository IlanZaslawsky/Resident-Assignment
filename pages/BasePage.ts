import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async dismissModalIfPresent() {
    const modal = this.page.locator('.dy-modal-container.dy-act-overlay');
    const modalCount = await modal.count();
    
    if (modalCount > 0) {
      const closeButton = this.page.locator('.dy-lb-close');
      await closeButton.waitFor({ state: 'visible', timeout: 3000 });
      await closeButton.click();
      await modal.waitFor({ state: 'hidden', timeout: 5000 });
    }
  }
}


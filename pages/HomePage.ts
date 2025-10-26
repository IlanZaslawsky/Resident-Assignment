import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly url = 'https://qa.awarasleep.com/';

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.dismissModalIfPresent();
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(this.url);
  }
}


import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TEST_CONFIG } from '../config/test-config';
import { logger } from '../utils/logger';

export class MattressPage extends BasePage {
  private readonly url = `${TEST_CONFIG.urls.uiBase}/mattress`;

  constructor(page: Page) {
    super(page);
  }

  private getAddToCartButton() {
    return this.page.locator('[data-testid="addtocart_btn"]');
  }

  private getCartCounter() {
    return this.page.locator('[data-testid="cart_counter"]').first();
  }

  async navigate() {
    logger.action(`Navigating to mattress page: ${this.url}`);
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    logger.info('Page loaded');
    await this.dismissModalIfPresent();
  }

  async verifyPageLoaded() {
    logger.verify('Verifying mattress page loaded');
    await expect(this.page).toHaveURL(/.*\/mattress.*/);
    logger.info('Mattress page verified');
  }

  async addMattressToCart() {
    logger.action('Adding mattress to cart');
    const button = this.getAddToCartButton();
    await button.click();
    logger.info('Item added to cart');
  }

  async verifyItemAddedToCart() {
    logger.verify('Verifying item added to cart');
    const counter = this.getCartCounter();
    await expect(counter).toHaveText('1', { timeout: TEST_CONFIG.timeouts.domUpdate });
    logger.info('Cart count verified: 1 item');
  }
}


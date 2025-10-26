import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MattressPage extends BasePage {
  private readonly url = 'https://qa.awarasleep.com/mattress';
  private readonly addToCartButton = '[data-testid="addtocart_btn"]';
  private readonly cartCounter = '[data-testid="cart_counter"]';

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.dismissModalIfPresent();
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/.*\/mattress.*/);
  }

  async addMattressToCart() {
    const button = this.page.locator(this.addToCartButton);
    await button.waitFor({ state: 'visible', timeout: 10000 });
    await button.click();
  }

  async verifyItemAddedToCart() {
    const counter = this.page.locator(this.cartCounter).first();
    await counter.waitFor({ state: 'attached', timeout: 10000 });
    await expect(counter).toHaveText('1', { timeout: 10000 });
  }
}


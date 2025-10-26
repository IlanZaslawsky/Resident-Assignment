import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { MattressPage } from '../../pages/MattressPage';

test.describe('Awara Sleep UI Test', () => {
  test('Complete mattress shopping flow', async ({ page }) => {
    await page.setExtraHTTPHeaders({ 'User-Agent': 'E2EUI-Tests' });

    const homePage = new HomePage(page);
    const mattressPage = new MattressPage(page);

    await homePage.navigate();
    await homePage.verifyPageLoaded();

    await mattressPage.navigate();
    await mattressPage.verifyPageLoaded();

    await mattressPage.addMattressToCart();
    await mattressPage.verifyItemAddedToCart();
  });
});

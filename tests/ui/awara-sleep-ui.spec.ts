import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { MattressPage } from '../../pages/MattressPage';

test.describe('Awara Sleep UI Tests', () => {
  let homePage: HomePage;
  let mattressPage: MattressPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    mattressPage = new MattressPage(page);
  });

  test('should load Awara Sleep home page', async () => {
    await homePage.navigate();
    await homePage.verifyPageLoaded();
  });

  test('should load mattress product page', async () => {
    await mattressPage.navigate();
    await mattressPage.verifyPageLoaded();
  });

  test('should add mattress to cart and display correct count', async () => {
    await mattressPage.navigate();
    await mattressPage.verifyPageLoaded();

    await mattressPage.addMattressToCart();
    await mattressPage.verifyItemAddedToCart();
  });
});

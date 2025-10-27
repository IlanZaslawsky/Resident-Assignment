import { test, expect } from '@playwright/test';
import { ProductsAPI } from '../../api/ProductsAPI';
import { TEST_CONFIG } from '../../config/test-config';

const AWARA_BRAND = TEST_CONFIG.api.brands.awara;
const AWARA_HYBRID_MATTRESS = TEST_CONFIG.api.products.awaraHybridMattress;

test.describe('Resident Home API Tests', () => {
  let productsAPI: ProductsAPI;

  test.beforeEach(async ({ request }) => {
    productsAPI = new ProductsAPI(request);
  });

  test('should filter products by brand', async () => {
    const products = await productsAPI.getByBrand(AWARA_BRAND);

    expect(products, 'Response should contain products array').toBeInstanceOf(Array);
    expect(products.length, 'Should find at least one Awara product').toBeGreaterThan(0);
  });

  test('should find specific product by name and brand', async () => {
    const products = await productsAPI.getByNameAndBrand(AWARA_HYBRID_MATTRESS, AWARA_BRAND);

    expect(products, 'Response should contain products array').toBeInstanceOf(Array);
    expect(products.length, 'Should find exactly one product').toBe(1);
  });
});

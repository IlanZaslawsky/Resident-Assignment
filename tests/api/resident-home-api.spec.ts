import { test, expect } from '@playwright/test';
import type { ApiResponse, Product } from '../../types/api-responses';
import { TEST_CONFIG } from '../../config/test-config';

const API_BASE_URL = TEST_CONFIG.urls.apiBase;
const AWARA_BRAND = TEST_CONFIG.api.brands.awara;
const AWARA_HYBRID_MATTRESS = TEST_CONFIG.api.products.awaraHybridMattress;

test.describe('Resident Home API Tests', () => {
  /**
   * Extract products from response handling multiple possible formats
   */
  function extractProducts(data: ApiResponse): Product[] {
    return data.status?.result?.data || data.result?.data || data.data || [];
  }

  test('should filter products by brand', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/products?brand=${AWARA_BRAND}`);

    expect(response.status(), 'Brand API should return 200').toBe(200);

    const data = await response.json() as ApiResponse;
    const products = extractProducts(data);

    expect(Array.isArray(products), 'Response should contain products array').toBe(true);
    expect(products.length, 'Should find at least one Awara product').toBeGreaterThan(0);
  });

  test('should find specific product by name and brand', async ({ request }) => {
    const response = await request.get(
      `${API_BASE_URL}/products?name=${AWARA_HYBRID_MATTRESS}&lang=en&brand=${AWARA_BRAND}`
    );

    expect(response.status(), 'Product lookup should return 200').toBe(200);

    const data = await response.json() as ApiResponse;
    const products = extractProducts(data);

    expect(Array.isArray(products), 'Response should contain products array').toBe(true);
    expect(products.length, 'Should find exactly one product').toBe(1);
  });
});

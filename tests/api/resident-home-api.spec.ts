import { test, expect } from '@playwright/test';

const API_BASE_URL = 'https://qa-api.residenthome.com';
const AWARA_BRAND = 'awara';
const AWARA_HYBRID_MATTRESS = 'the-awara-hybrid-mattress-30';

test.describe('Resident Home API Test', () => {
  test('Products API endpoints', async ({ request }) => {
    const brandResponse = await request.get(`${API_BASE_URL}/products?brand=${AWARA_BRAND}`);
    expect(brandResponse.status()).toBe(200);
    
    const brandData = await brandResponse.json();
    const brandProducts = brandData.status?.result?.data || brandData.result?.data || brandData.data || brandData;
    expect(Array.isArray(brandProducts)).toBe(true);
    expect(brandProducts.length).toBeGreaterThan(0);

    const productResponse = await request.get(
      `${API_BASE_URL}/products?name=${AWARA_HYBRID_MATTRESS}&lang=en&brand=${AWARA_BRAND}`
    );
    expect(productResponse.status()).toBe(200);
    
    const productData = await productResponse.json();
    const products = productData.status?.result?.data || productData.result?.data || productData.data || productData;
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBe(1);
  });
});

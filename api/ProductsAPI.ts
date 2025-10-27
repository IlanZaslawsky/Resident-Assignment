import { APIRequestContext } from '@playwright/test';
import { BaseAPI } from './BaseAPI';
import { ApiResponse, Product } from '../types/api-responses';
import { TEST_CONFIG } from '../config/test-config';

export class ProductsAPI extends BaseAPI {
  constructor(request: APIRequestContext) {
    super(request, TEST_CONFIG.urls.apiBase);
  }

  async getByBrand(brand: string): Promise<Product[]> {
    const query = this.buildQuery({ brand });
    const data = await this.get<ApiResponse>(`/products${query}`);
    return this.extractProducts(data);
  }

  async getByNameAndBrand(name: string, brand: string): Promise<Product[]> {
    const query = this.buildQuery({ name, lang: 'en', brand });
    const data = await this.get<ApiResponse>(`/products${query}`);
    return this.extractProducts(data);
  }
}

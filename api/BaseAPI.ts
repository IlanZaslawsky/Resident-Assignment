import { APIRequestContext, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export abstract class BaseAPI {
  constructor(protected request: APIRequestContext, protected baseURL: string) {}

  protected async get<T>(endpoint: string): Promise<T> {
    logger.action(`GET ${endpoint}`);
    const response = await this.request.get(`${this.baseURL}${endpoint}`);
    expect(response.status()).toBe(200);
    logger.info(`GET ${endpoint} - 200`);
    return response.json() as Promise<T>;
  }

  protected buildQuery(params: Record<string, string>): string {
    return `?${new URLSearchParams(params)}`;
  }

  protected extractProducts(data: any): any[] {
    return data.status?.result?.data || data.result?.data || data.data || [];
  }
}

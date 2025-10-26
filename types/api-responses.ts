export interface Product {
  id?: string;
  name: string;
  brand?: string;
  [key: string]: unknown;
}

export interface ProductsResponse {
  data: Product[];
}

export interface ApiResponse {
  status?: {
    result?: {
      data: Product[];
    };
  };
  result?: {
    data: Product[];
  };
  data?: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  rating: number;
  details: {
    name: string;
    items: string[];
  }[];
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  inStock?: boolean;
}

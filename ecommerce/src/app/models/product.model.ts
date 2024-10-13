// product.model.ts
export interface Product {
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ProductCategory {
  categoryName: string;
  products: Product[];
}

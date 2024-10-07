// src/app/models/product.model.ts

export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public category: string,
    public imageUrl: string
  ) {}
}

export class ProductCategory {
  constructor(
    public categoryName: string,   // Name of the product category (e.g., "Digital Planners")
    public products: Product[]     // Array of products belonging to this category
  ) {}
}

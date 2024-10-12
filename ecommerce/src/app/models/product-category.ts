import { Product } from "./product.model";

export class ProductCategory {
  constructor(
    public categoryName: string, // Name of the product category
    public products: Product[]   // Array of products in the category
  ) {}
}

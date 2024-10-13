// product.model.spec.ts
import { Product } from './product.model';

describe('Product', () => {
  it('should create a product object', () => {
    const product: Product = {
      name: 'Digital Planner',
      category: 'Planners',
      price: 19.99,
      description: 'A useful digital planner.',
      imageUrl: 'planner.jpg'
    };
    expect(product).toBeTruthy();
  });

  it('should have correct name and price', () => {
    const product: Product = {
      name: 'Digital Planner',
      category: 'Planners',
      price: 19.99,
      description: 'A useful digital planner.',
      imageUrl: 'planner.jpg'
    };
    expect(product.name).toBe('Digital Planner');
    expect(product.price).toBe(19.99);
  });
});

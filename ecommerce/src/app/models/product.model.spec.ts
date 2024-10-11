import { Product } from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product(1, 'Digital Planner', 19.99, 'A useful digital planner.', 'Planners', 'planner.jpg');
    expect(product).toBeTruthy();
  });

  it('should have correct name and price', () => {
    const product = new Product(1, 'Digital Planner', 19.99, 'A useful digital planner.', 'Planners', 'planner.jpg');
    expect(product.name).toBe('Digital Planner');
    expect(product.price).toBe(19.99);
  });
});

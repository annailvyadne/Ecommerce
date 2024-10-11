import { TestBed } from '@angular/core/testing';
import { ProductService } from '../services/product-service.service'; // Change here

describe('ProductService', () => { // Change the describe name as well
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

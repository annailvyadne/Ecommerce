// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  getAllProducts(): Observable<Product[]> {
    // Replace with actual HTTP call or mock data
    return of([
      { name: 'Monthly Planner', category: 'Digital Planners', price: 299, description: 'A monthly planner', imageUrl: 'assets/images/monthly-planner.png' },
      //... other products
    ]);
  }
}

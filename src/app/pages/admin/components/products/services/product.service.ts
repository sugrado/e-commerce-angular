import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../contracts/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  create(product: Product) {
    return this.httpClient.post('products', product);
  }
}

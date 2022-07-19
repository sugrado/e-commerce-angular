import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { DataResult } from 'src/app/core/results/data-result';
import { ListProduct } from '../contracts/list-product';
import { Product } from '../contracts/product';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  create(product: Product): Observable<DataResult<Product>> {
    return this.httpClient.post<DataResult<Product>>('products', product);
  }

  async read(
    page: number = 0,
    size: number = 11,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; products: ListProduct[] }> {
    const promiseData: Promise<{
      totalCount: number;
      products: ListProduct[];
    }> = lastValueFrom(
      this.httpClient.get<{ totalCount: number; products: ListProduct[] }>(
        `products?page=${page}&size=${size}`
      )
    );

    promiseData
      .then(successCallBack)
      .catch((errorResponse: HttpErrorResponse) =>
        errorCallBack!(errorResponse.message)
      );
    return await promiseData;
  }
}

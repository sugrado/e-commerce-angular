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
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<ListProduct[]> {
    const promiseData: Promise<ListProduct[]> = lastValueFrom(
      this.httpClient.get<ListProduct[]>('products')
    );

    promiseData
      .then(successCallBack)
      .catch((errorResponse: HttpErrorResponse) =>
        errorCallBack!(errorResponse.message)
      );
    return await promiseData;
  }
}

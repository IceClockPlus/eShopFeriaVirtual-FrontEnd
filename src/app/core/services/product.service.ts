import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../../src/environments/environment';

import { ApiPagedResponse } from '../models/Wrappers/ApiPagedResponse';
import { ProductDTO } from '../models/products/ProductDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productEndpoint: string = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<ApiPagedResponse<ProductDTO[]>> {
    let methodEndpoint = this.productEndpoint;
    return this.httpClient.get<ApiPagedResponse<ProductDTO[]>>(methodEndpoint);
  }
}

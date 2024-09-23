import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductResponse } from '../interface/ProductResponse';
import { ProductModel } from '../models/ProductModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductResponse[]>(`${environment.BASE_URL_API}/products`).pipe(
      map(response => response.map(product => new ProductModel(product)))
    );
  }
}

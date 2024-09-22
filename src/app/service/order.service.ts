import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Customer } from '../models/Customer';
import { ProductModel } from '../models/ProductModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createOrderRequest } from '../util/commonFunctions';
import { OrderItemI, OrderRequest } from '../interface/OrderRequest';
import { OrderResponse } from '../interface/OrderResponse';
import { ProductI } from '../interface/ProductI';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8090/api/v1/orders';

  private products: OrderItemI[] = [];

  private productsSubject = new BehaviorSubject<OrderItemI[]>(this.products);

  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) { }

  addProduct(product: ProductModel, quantityRequest: number) {
    const productI: ProductI = product.toProductI();

    const existingItem = this.products.find(
      (item) => item.product.id === productI.id
    );
    if (existingItem) {
      existingItem.quantityRequest += quantityRequest;
    } else {
      this.products.push({ product: productI, quantityRequest });
    }
    this.productsSubject.next(this.products);
  }
  getProducts() {
    return this.products;
  }

  getTotalAmount(): number {
    return this.products.reduce(
      (total, item) => total + item.product.price * item.quantityRequest,
      0
    );
  }

  completeOrder(customerId:number,address:string): Observable<any> {
    const orderRequest: OrderRequest = createOrderRequest(
      customerId,
      address,
      this.getProducts()
    );

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl, orderRequest, { headers }).pipe(
      tap((response) => {
        this.clearOrder();
      }),
      catchError((error) => {
        console.error('Error en la creación de la orden:', error);
        throw error; // Manejo de errores
      })
    );
  }

  getOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(this.apiUrl);
  }

  private clearOrder() {
    this.products = [];
    this.productsSubject.next(this.products);
  }

  clearCart() {
    this.products = [];
    this.productsSubject.next(this.products);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(
      (item) => item.product.id !== productId
    );
    this.productsSubject.next(this.products);
  }
}

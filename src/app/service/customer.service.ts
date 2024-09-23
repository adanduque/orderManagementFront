import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Customer>(`${environment.BASE_URL_API}/customers`, customer, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getLastCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${environment.BASE_URL_API}/customers/last`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8090/api/v1/customers'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) { }

  // Método para crear un nuevo cliente
  createCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Customer>(this.apiUrl, customer, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  getLastCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/last`);
  }
}

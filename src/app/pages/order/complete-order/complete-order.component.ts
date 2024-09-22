import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})
export class CompleteOrderComponent implements OnInit {
  totalProducts:number=0;
  totalAmount:number=0;

  customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    typeDocument: '',
    numDocument: '',
  };

  products: any[] = [];

  constructor(public _customerService: CustomerService,public _orderService: OrderService, private router: Router,public dialog: MatDialog) { }

  ngOnInit() {

    this._orderService.products$.subscribe(products => {
      this.totalProducts = products.reduce((total, product) => total + product.quantityRequest, 0);
      this.products = products;
      this.totalAmount = this._orderService.getTotalAmount();
    });
    this.getLastCustomer();

  }

  getLastCustomer(): void {
    this._customerService.getLastCustomer().subscribe(
      customer => this.customer = customer,
      error => console.error('Error fetching last customer:', error)
    );
  }

  getTotalAmount(): number {
    return this.products.reduce((total, item) => total + (item.product.price * item.quantityRequest), 0);
  }

  completeOrder(): void {

    this._orderService.completeOrder(this.customer?.id,this.customer?.address).subscribe(
      response => {
        Swal.fire({
          title: 'Orden completada',
          text: 'Tu orden ha sido completada exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/thank-you']);

      },
      error => {
        console.error('Error al completar la orden:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo completar la orden.',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    );
  }


  goBack() {
    this.router.navigate(['/availableProducts']);

  }
}

import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItemI } from 'src/app/interface/OrderRequest';

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
})
export class OrderDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { products: OrderItemI[], total: number }) {}


  completeOrder(): void {
    console.log('Completar pago', this.data);

  }
}

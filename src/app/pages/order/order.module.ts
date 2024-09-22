import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsDialogComponent } from './order-details-dialog/order-details-dialog.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AvailableProductsComponent } from './available-products/available-products.component';

@NgModule({
  declarations: [
    OrderDetailComponent,
    AvailableProductsComponent,
    CompleteOrderComponent,
    OrderDetailsDialogComponent,
    ThankYouComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  exports:[
    AvailableProductsComponent
  ]
})
export class OrderModule { }

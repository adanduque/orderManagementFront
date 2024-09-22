import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AvailableProductsComponent } from './available-products/available-products.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { OrderDetailsDialogComponent } from './order-details-dialog/order-details-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { OrderListComponent } from './order-list/order-list.component';

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

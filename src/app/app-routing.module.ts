import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableProductsComponent } from './order/available-products/available-products.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { CustomerRegistationComponent } from './customer/customer-registation/customer-registation.component';
import { CompleteOrderComponent } from './order/complete-order/complete-order.component';
import { LoginComponent } from './login/login.component';
import { ThankYouComponent } from './order/thank-you/thank-you.component';
import { OrderListComponent } from './order/order-list/order-list.component';


const routes: Routes = [
  { path: 'customer-registration', component: CustomerRegistationComponent },
  { path: 'available-products', component: AvailableProductsComponent },
  { path: 'complete-order', component: CompleteOrderComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: 'orders', component: OrderListComponent },
  { path: '', redirectTo: '/available-products', pathMatch: 'full' },
  { path: '**', redirectTo: '/available-products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

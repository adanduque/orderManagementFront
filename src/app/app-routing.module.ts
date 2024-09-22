import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteOrderComponent } from './pages/order/complete-order/complete-order.component';
import { CustomerRegistationComponent } from './pages/customer/customer-registation/customer-registation.component';
import { AvailableProductsComponent } from './pages/order/available-products/available-products.component';
import { ThankYouComponent } from './pages/order/thank-you/thank-you.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';


const routes: Routes = [
  { path: 'customer-registration', component: CustomerRegistationComponent },
  { path: 'available-products', component: AvailableProductsComponent },
  { path: 'complete-order', component: CompleteOrderComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: 'orders', component: OrderListComponent },
  { path: '', redirectTo: '/customer-registration', pathMatch: 'full' },
  { path: '**', redirectTo: '/customer-registration' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomerModule } from './pages/customer/customer.module';
import { OrderModule } from './pages/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OrderModule,
    CustomerModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

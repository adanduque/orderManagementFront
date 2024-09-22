import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegistationComponent } from './customer-registation/customer-registation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerRegistationComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerRegistationComponent
  ]
})
export class CustomerModule { }

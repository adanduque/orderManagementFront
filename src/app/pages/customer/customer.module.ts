import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegistationComponent } from './customer-registation/customer-registation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';



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

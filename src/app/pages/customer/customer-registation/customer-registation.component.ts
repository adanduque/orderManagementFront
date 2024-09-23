import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registation',
  templateUrl: './customer-registation.component.html',
  styleUrls: ['./customer-registation.component.scss']
})
export class CustomerRegistationComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      typeDocument: ['', Validators.required],
      numDocument: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerService.createCustomer(customer).subscribe(
        response => {
          Swal.fire({
            title: 'Usuario creado',
            text: `Se ha generado un usuario con los siguientes datos:\nContraseña: ${customer.numDocument}\nUsuario: ${customer.email}`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then(() => {
            this.router.navigate(['/login']);
          });

          // Limpia el formulario
          this.customerForm.reset();
        },
        error => {
          console.error('Error creating customer:', error);
          Swal.fire({
            title: 'Error',
            text: 'Error al crear el cliente.',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'warning',
        confirmButtonText: 'Cerrar'
      });
    }
  }

  // Método para redirigir al login
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}

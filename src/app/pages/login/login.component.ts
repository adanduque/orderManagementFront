import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router
import Swal from 'sweetalert2'; // Importa SweetAlert

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Aquí puedes agregar la lógica para autenticar al usuario
      // Por ejemplo, llamar a un servicio de autenticación

      Swal.fire({
        title: 'Éxito',
        text: 'Inicio de sesión exitoso.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.router.navigate(['/dashboard']); // Redirige a otra página (por ejemplo, dashboard)
      });
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'warning',
        confirmButtonText: 'Cerrar'
      });
    }
  }
}

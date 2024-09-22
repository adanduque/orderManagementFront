import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  constructor( private router: Router) { }

  goBack() {
    this.router.navigate(['/availableProducts']); // Redirige a la página de pago

  }
}

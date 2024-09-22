import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../../service/order.service';
import { OrderItemI } from '../../interface/OrderRequest';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  totalProducts: number = 0;
  totalAmount:number=0;
  products: OrderItemI[] = [];
  showDetails: boolean = false; // Controla la visibilidad de los detalles
  cartVisible = false; // Estado para mostrar/ocultar el carrito


  constructor(public _orderService: OrderService, private router: Router,public dialog: MatDialog) { }

  ngOnInit() {

    this._orderService.products$.subscribe(products => {
      this.totalProducts = products.reduce((total, product) => total + product.quantityRequest, 0);
      this.products = products;
      this.totalAmount = this._orderService.getTotalAmount();
    });
  }
  toggleCartDetails(): void {
    this.cartVisible = !this.cartVisible; // Alternar visibilidad
  }

  completeOrder() {
    this.router.navigate(['/complete-order']); // Redirige a la página de pago

  }
  clearOrder(){
  this._orderService.clearCart();
  }

  getTotalAmount(): number {
    return this.products.reduce((total, item) => total + item.product.price * item.quantityRequest, 0);
  }


  viewOrders() {
    // Navegar a la página de "Mis pedidos"
    this.router.navigate(['/orders']);
  }

}

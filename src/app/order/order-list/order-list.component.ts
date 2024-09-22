import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderResponse } from 'src/app/interface/OrderResponse';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  // Las columnas que se mostrarán en la tabla
  displayedColumns: string[] = ['id', 'orderDate', 'address', 'totalAmount', 'status', 'orderDetails'];

  // Lista de órdenes
  orders: OrderResponse[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.loadOrders(); // Cargar las órdenes al iniciar el componente
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data: OrderResponse[]) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error loading orders', err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/availableProducts']); // Redirige a la página de productos disponibles
  }
}

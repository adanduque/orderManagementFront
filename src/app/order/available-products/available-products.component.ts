import { Component, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss']
})
export class AvailableProductsComponent {

  constructor(public _orderService:OrderService,private _productsService:ProductService) { }

  products:ProductModel[]=[];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this._productsService.getProducts().subscribe(

      (data: ProductModel[]) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }



  addProductToCard(product:ProductModel) {

    this._orderService.addProduct(product,1);
  }
  removeProductFromCart(productId:number) {
    this._orderService.removeProduct(productId); // Llama al método de eliminar del carrito
  }
}

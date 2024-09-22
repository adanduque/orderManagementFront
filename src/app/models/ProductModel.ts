import { ProductI } from "../interface/ProductI";
import { ProductResponse } from "../interface/ProductResponse";

export class ProductModel {
  private id: number;
  private name: string;
  private price: number;
  private stock: number;


  constructor(data: ProductResponse) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
  }


  // Getters
  public getId(): number {
    return this.id;
  }

  public getPrice(): number {
    return this.price;
  }

  public getName(): string {
    return this.name;
  }

  public getStock(): number {
    return this.stock;
  }

  // Setters
  public setIdProduct(id: number): void {
    this.id = id;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setStock(stock: number): void {
    this.stock = stock;
  }

  // Método para convertir ProductModel a ProductI
  public toProductI(): ProductI {
    return {
      id: this.id,
      price: this.price,
      name: this.name
    };
}
}

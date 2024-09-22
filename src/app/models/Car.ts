import { ProductI } from "../interface/ProductI";

export class Car {
  private total: number = 0;
  private products: Map<ProductI, number> = new Map<ProductI, number>();

  addProduct(product: ProductI, quantity: number = 1) {
      if (this.products.has(product)) {
          const currentQuantity = this.products.get(product)!;
          this.products.set(product, currentQuantity + quantity);
      } else {
          this.products.set(product, quantity);
      }
      this.total += product.price * quantity;
  }

  removeProduct(product: ProductI, quantity: number = 1) {
      if (this.products.has(product)) {
          const currentQuantity = this.products.get(product)!;

          if (currentQuantity <= quantity) {
              this.products.delete(product);
              this.total -= product.price * currentQuantity;
          } else {
              this.products.set(product, currentQuantity - quantity);
              this.total -= product.price * quantity;
          }
      }
  }

  getTotal(): number {
      return this.total;
  }

  getProducts(): { product: ProductI; quantity: number }[] {
      return Array.from(this.products.entries()).map(([product, quantity]) => ({ product, quantity }));
  }
}

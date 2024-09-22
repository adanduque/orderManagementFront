import { OrderDetail } from "./OrderDetail";
import { ProductI } from "./ProductI";

export interface OrderRequest {
  customerId: number;
  address: string;
  orderDetail: OrderDetail[];
}

export interface OrderItemI
{
  product: ProductI;
  quantityRequest: number;
}


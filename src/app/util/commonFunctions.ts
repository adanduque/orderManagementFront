import { OrderDetail } from "../interface/OrderDetail";
import { OrderRequest, OrderItemI } from '../interface/OrderRequest';

export function createOrderRequest(customerId: number, address: string, orderItem:OrderItemI[]): OrderRequest {
  return {
    customerId: customerId,
    address: address,
    orderDetail: createOrderDetails(orderItem)
  };
}


export function createOrderDetails(orderItems: OrderItemI[]): OrderDetail[] {
  return orderItems.map(item => ({
    productId: item.product.id, // Asegúrate de que el ID del producto esté disponible aquí
    quantity: item.quantityRequest
  }));
}

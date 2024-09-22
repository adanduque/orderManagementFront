export interface OrderDetailResponse {
  productId: number;   // Cambiado a number según tu dato
  quantity: number;
  price: number;
}

export interface OrderResponse {
  id: string;
  customerId: string;
  orderDetails: OrderDetailResponse[];
  totalAmount: number;
  orderDate: string;   // Si prefieres trabajar con objetos Date, puedes cambiarlo a Date
  status: string;
  address: string;
}

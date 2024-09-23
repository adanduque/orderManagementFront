export interface OrderDetailResponse {
  productId: number;
  quantity: number;
  price: number;
}

export interface OrderResponse {
  id: string;
  customerId: string;
  orderDetails: OrderDetailResponse[];
  totalAmount: number;
  orderDate: string;
  status: string;
  address: string;
}

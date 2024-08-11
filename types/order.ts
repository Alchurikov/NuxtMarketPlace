export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface PaymentInfo {
  cardType: string;
  lastFour: string;
  expirationDate: string;
}

export interface OrderDetails {
  id: string;
  items: OrderItem[];
  totals: OrderTotals;
  shippingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
}

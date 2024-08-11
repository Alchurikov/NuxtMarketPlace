import { defineEventHandler, readBody } from 'h3';
import type { CartItem } from '~/types/cart';
import type { OrderDetails } from '~/types/order';

interface CheckoutData {
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  items: CartItem[];
  total: number;
}

export const orders: Record<string, OrderDetails> = {};

export default defineEventHandler(async (event) => {
  try {
    const body: CheckoutData = await readBody(event);

    const orderId = 'ORD-' + Date.now();

    const orderDetails: OrderDetails = {
      id: orderId,
      items: body.items,
      totals: {
        subtotal: body.total,
        shipping: 5,
        total: body.total + 5,
      },
      shippingAddress: {
        street: body.address,
        city: body.city,
        state: body.state,
        postalCode: body.postalCode,
      },
      paymentInfo: {
        cardType: 'Visa',
        lastFour: body.cardNumber.slice(-4),
        expirationDate: body.expirationDate,
      },
    };

    orders[orderId] = orderDetails;

    return {
      success: true,
      orderId: orderId,
      body: orderDetails,
    };
  } catch (error) {
    console.error('Checkout error:', error);
    return {
      success: false,
      message: 'An error occurred during checkout',
    };
  }
});

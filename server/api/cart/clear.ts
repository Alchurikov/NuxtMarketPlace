import { defineEventHandler } from 'h3';
import type { CartItem } from '~/types/cart';
import { cart } from '../cart';

export default defineEventHandler(async () => {
  try {
    cart.splice(0, cart.length);
    return { success: true, message: 'Cart cleared successfully' };
  } catch (error) {
    console.error('Error clearing cart:', error);
    return {
      success: false,
      message: 'An error occurred while clearing the cart',
    };
  }
});

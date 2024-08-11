import { defineEventHandler, readBody, getMethod } from 'h3';
import type { CartItem } from '~/types/cart';

export let cart: CartItem[] = [];

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  try {
    switch (method) {
      case 'GET':
        return cart;

      case 'POST':
        const newItem: CartItem = await readBody(event);
        const existingItemIndex = cart.findIndex(
          (item) => item.id === newItem.id
        );
        if (existingItemIndex !== -1) {
          cart[existingItemIndex].quantity += newItem.quantity;
        } else {
          cart.push(newItem);
        }
        return { success: true, cart };

      case 'PUT':
        const { id, quantity } = await readBody(event);
        const itemToUpdateIndex = cart.findIndex((item) => item.id === id);
        if (itemToUpdateIndex !== -1) {
          cart[itemToUpdateIndex].quantity = quantity;
          return { success: true, cart };
        }
        return { success: false, message: 'Item not found in cart' };

      case 'DELETE':
        const { id: itemId } = await readBody(event);
        const initialLength = cart.length;
        cart = cart.filter((item) => item.id !== itemId);
        if (cart.length < initialLength) {
          return { success: true, cart };
        }
        return { success: false, message: 'Item not found in cart' };

      default:
        return { success: false, message: 'Method not allowed' };
    }
  } catch (error) {
    console.error('Cart API error:', error);
    return {
      success: false,
      message: 'An error occurred while processing your request',
    };
  }
});

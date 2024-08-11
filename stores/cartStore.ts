import { defineStore } from 'pinia';
import type { Cart, CartItem } from '~/types/cart';
import type { Product } from '~/types/product';

export const useCartStore = defineStore('cart', {
  state: (): Cart => ({
    items: [],
    total: 0,
  }),

  getters: {
    itemCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
    cartTotal: (state) => state.total,
  },

  actions: {
    async fetchCart() {
      try {
        const response = await $fetch<CartItem[]>('/api/cart');
        this.items = response;
        this.updateTotal();
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    },

    async addToCart(product: Product) {
      try {
        const existingItem = this.items.find((item) => item.id === product.id);
        if (existingItem) {
          await this.updateQuantity(existingItem.id, existingItem.quantity + 1);
        } else {
          const item: CartItem = { ...product, quantity: 1 };
          await $fetch('/api/cart', {
            method: 'POST',
            body: item,
          });
        }
        await this.fetchCart();
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    },
    async updateQuantity(itemId: number, quantity: number) {
      try {
        await $fetch('/api/cart', {
          method: 'PUT',
          body: { id: itemId, quantity },
        });
        await this.fetchCart();
      } catch (error) {
        console.error('Error updating item quantity:', error);
      }
    },

    async removeFromCart(item: CartItem) {
      try {
        await $fetch('/api/cart', {
          method: 'DELETE',
          body: { id: item.id },
        });
        await this.fetchCart();
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    },

    updateTotal() {
      this.total = this.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    async clearCart() {
      try {
        const response = await $fetch('/api/cart/clear', { method: 'POST' });
        if (response.success) {
          this.items = [];
          this.total = 0;
        } else {
          console.error('Failed to clear cart:', response.message);
        }
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    },
  },
});

declare module 'pinia' {
  export interface PiniaCustomProperties {
    clearCart: () => Promise<void>;
  }
}

<template>
  <section aria-labelledby="cart-heading" class="lg:col-span-7">
    <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

    <ul
      role="list"
      class="divide-y divide-gray-200 border-b border-t border-gray-200"
    >
      <li
        v-for="(item, itemIdx) in cartStore.items"
        :key="item.id"
        class="flex py-6 sm:py-10"
      >
        <div class="flex-shrink-0">
          <img
            :src="item.image"
            :alt="item.name"
            class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
          />
        </div>

        <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div class="flex justify-between">
                <h3 class="text-sm">
                  <a
                    :href="`/product/${item.id}`"
                    class="font-medium text-gray-700 hover:text-gray-800"
                    >{{ item.name }}</a
                  >
                </h3>
              </div>
              <p class="mt-1 text-sm font-medium text-gray-900">
                ${{ item.price }}
              </p>
            </div>

            <div class="mt-4 sm:mt-0 sm:pr-9">
              <label :for="`quantity-${itemIdx}`" class="sr-only"
                >Quantity, {{ item.name }}</label
              >
              <select
                :id="`quantity-${itemIdx}`"
                :name="`quantity-${itemIdx}`"
                :value="item.quantity"
                @change="updateQuantity(item, $event)"
                class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option v-for="q in 8" :key="q" :value="q">{{ q }}</option>
              </select>

              <div class="absolute right-0 top-0">
                <button
                  type="button"
                  @click="cartStore.removeFromCart(item)"
                  class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Remove</span>
                  <XMarkIconMini class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <p class="mt-4 flex space-x-2 text-sm text-gray-700">
            <CheckIcon
              v-if="item.inStock"
              class="h-5 w-5 flex-shrink-0 text-green-500"
              aria-hidden="true"
            />
            <ClockIcon
              v-else
              class="h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
            <span>{{ item.inStock ? 'In stock' : 'Out of stock' }}</span>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { XMarkIcon as XMarkIconMini } from '@heroicons/vue/20/solid';
import { CheckIcon, ClockIcon } from '@heroicons/vue/20/solid';
import { useCartStore } from '~/stores/cartStore';
import type { CartItem } from '~/types/cart';
const cartStore = useCartStore();

const updateQuantity = (item: CartItem, event: any) => {
  const newQuantity = parseInt(event.target.value);
  cartStore.updateQuantity(item.id, newQuantity);
};
</script>

<template>
  <section
    aria-labelledby="summary-heading"
    class="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
  >
    <div class="mx-auto max-w-lg lg:max-w-none">
      <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <ul
        role="list"
        class="divide-y divide-gray-200 text-sm font-medium text-gray-900"
      >
        <li
          v-for="item in cartStore.items"
          :key="item.id"
          class="flex items-start space-x-4 py-6"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="h-20 w-20 flex-none rounded-md object-cover object-center"
          />
          <div class="flex-auto space-y-1">
            <h3>{{ item.name }}</h3>
            <p class="text-gray-500">Quantity: {{ item.quantity }}</p>
          </div>
          <p class="flex-none text-base font-medium">
            ${{ item.price.toFixed(2) }}
          </p>
        </li>
      </ul>

      <dl
        class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900"
      >
        <div class="flex items-center justify-between">
          <dt class="text-gray-600">Subtotal</dt>
          <dd>${{ cartStore.cartTotal.toFixed(2) }}</dd>
        </div>

        <div class="flex items-center justify-between">
          <dt class="text-gray-600">Shipping</dt>
          <dd>${{ shippingCost.toFixed(2) }}</dd>
        </div>

        <div
          class="flex items-center justify-between border-t border-gray-200 pt-6 text-base"
        >
          <dt>Total</dt>
          <dd>${{ orderTotal.toFixed(2) }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore';
import { computed } from 'vue';

const cartStore = useCartStore();

const shippingCost = 5.0;

const orderTotal = computed(() => cartStore.cartTotal + shippingCost);
</script>

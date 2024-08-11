<template>
  <section
    aria-labelledby="summary-heading"
    class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
  >
    <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
      Order summary
    </h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-gray-900">
          ${{ cartStore.cartTotal.toFixed(2) }}
        </dd>
      </div>
      <div
        v-if="showShipping"
        class="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <dt class="flex items-center text-sm text-gray-600">
          <span>Shipping estimate</span>
          <a
            href="#"
            class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only"
              >Learn more about how shipping is calculated</span
            >
          </a>
        </dt>
        <dd class="text-sm font-medium text-gray-900">
          ${{ shippingCost.toFixed(2) }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <dt class="text-base font-medium text-gray-900">Order total</dt>
        <dd class="text-base font-medium text-gray-900">
          ${{ orderTotal.toFixed(2) }}
        </dd>
      </div>
    </dl>

    <div class="mt-6">
      <NuxtLink
        to="/checkout"
        :class="[
          'w-full rounded-md border border-transparent px-4 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50',
          showShipping
            ? 'bg-indigo-600 hover:bg-indigo-700'
            : 'bg-gray-400 cursor-not-allowed',
        ]"
        :disabled="!showShipping"
      >
        Checkout
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore';
import { computed } from 'vue';

const cartStore = useCartStore();

const shippingCost = 5.0;

const showShipping = computed(() => {
  return cartStore.itemCount > 0 && cartStore.cartTotal > 0;
});

const orderTotal = computed(() => {
  return showShipping.value
    ? cartStore.cartTotal + shippingCost
    : cartStore.cartTotal;
});

onMounted(() => {
  cartStore.fetchCart();
});
</script>

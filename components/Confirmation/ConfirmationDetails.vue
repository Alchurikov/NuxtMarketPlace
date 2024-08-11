<template>
  <div>
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24"
    >
      <div class="lg:col-start-2">
        <h1 class="text-sm font-medium text-indigo-600">Payment successful</h1>
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Thanks for ordering
        </p>
        <p class="mt-2 text-base text-gray-500">
          We appreciate your order, we're currently processing it. So hang tight
          and we'll send you confirmation very soon!
        </p>

        <dl class="mt-16 text-sm font-medium">
          <dt class="text-gray-900">Order number</dt>
          <dd class="mt-2 text-indigo-600">{{ orderDetails.id }}</dd>
        </dl>

        <OrderSummary :products="orderDetails.items" />

        <OrderTotals :totals="orderDetails.totals" />

        <CustomerInfo
          :shippingAddress="orderDetails.shippingAddress"
          :paymentInfo="orderDetails.paymentInfo"
        />

        <div class="mt-16 border-t border-gray-200 py-6 text-right">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderSummary from './OrderSummary.vue';
import OrderTotals from './OrderTotals.vue';
import CustomerInfo from './CustomerInfo.vue';
import type { OrderDetails } from '../../types/order';

defineProps<{
  orderDetails: OrderDetails;
}>();
</script>

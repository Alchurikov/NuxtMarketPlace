<template>
  <dl
    class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
  >
    <div class="flex justify-between">
      <dt>Subtotal</dt>
      <dd class="text-gray-900">${{ totals.subtotal.toFixed(2) }}</dd>
    </div>

    <div class="flex justify-between">
      <dt>Shipping</dt>
      <dd class="text-gray-900">${{ totals.shipping.toFixed(2) }}</dd>
    </div>

    <div class="flex justify-between">
      <dt>Taxes</dt>
      <dd class="text-gray-900">${{ totals.tax.toFixed(2) }}</dd>
    </div>

    <div
      class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900"
    >
      <dt class="text-base">Total</dt>
      <dd class="text-base">${{ totals.total.toFixed(2) }}</dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import type { OrderTotals } from '../../types/order';

defineProps<{
  totals: OrderTotals;
}>();
</script>

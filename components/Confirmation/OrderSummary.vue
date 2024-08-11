<template>
  <ul
    role="list"
    class="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
  >
    <li v-for="item in products" :key="item.id" class="flex space-x-6 py-6">
      <img
        :src="item.image"
        :alt="item.name"
        class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
      />
      <div class="flex-auto space-y-1">
        <h3 class="text-gray-900">
          <NuxtLink :to="`/product/${item.id}`">{{ item.name }}</NuxtLink>
        </h3>
        <p>Quantity: {{ item.quantity }}</p>
      </div>
      <p class="flex-none font-medium text-gray-900">
        ${{ item.price.toFixed(2) }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { OrderItem } from '../../types/order';

defineProps<{
  products: OrderItem[];
}>();
</script>

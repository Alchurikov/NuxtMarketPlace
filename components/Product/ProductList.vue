<template>
  <section
    aria-labelledby="products-heading"
    class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
  >
    <div
      class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '../../types/product.ts';

defineProps<{
  products: Product[];
  total: number;
  page: number;
  limit: number;
}>();
</script>

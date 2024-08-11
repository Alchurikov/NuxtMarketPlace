<template>
  <div>
    <ProductDetails v-if="product" :product="product" />
    <p v-else>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

const route = useRoute();

const { data: product, error } = await useFetch<Product>(
  `/api/product/${route.params.id}`
);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
  });
}
</script>

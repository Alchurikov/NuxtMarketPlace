<template>
  <div class="bg-white">
    <Header />
    <main
      class="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48"
    >
      <h1 class="sr-only">Checkout</h1>

      <CheckoutSummary />
      <CheckoutForm />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import CheckoutSummary from '../components/Checkout/CheckoutSummary.vue';
import CheckoutForm from '../components/Checkout/CheckoutForm.vue';
</script>

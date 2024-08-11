<template>
  <div class="bg-white">
    <Header />
    <main v-if="orderDetails" class="relative lg:min-h-full">
      <ConfirmationHero />
      <ConfirmationDetails :orderDetails="orderDetails" />
    </main>
    <p v-else class="text-center py-16">Loading order details...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../../components/Header.vue';
import ConfirmationHero from '../../components/Confirmation/ConfirmationHero.vue';
import ConfirmationDetails from '../../components/Confirmation/ConfirmationDetails.vue';
import type { OrderDetails } from '../../types/order';

const route = useRoute();
const orderDetails = ref<OrderDetails | null>(null);

onMounted(async () => {
  const orderId = route.params.id as string;
  try {
    orderDetails.value = await $fetch<OrderDetails>(`/api/orders/${orderId}`);
  } catch (error) {
    console.error('Failed to fetch order details:', error);
  }
});
</script>

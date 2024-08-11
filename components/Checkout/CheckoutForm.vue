<template>
  <form
    @submit.prevent="submitCheckout"
    class="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16"
  >
    <div class="mx-auto max-w-lg lg:max-w-none">
      <section aria-labelledby="contact-info-heading">
        <h2 id="contact-info-heading" class="text-lg font-medium text-gray-900">
          Contact information
        </h2>

        <div class="mt-6">
          <label
            for="email-address"
            class="block text-sm font-medium text-gray-700"
            >Email address</label
          >
          <div class="mt-1">
            <input
              type="email"
              id="email-address"
              v-model="checkoutData.email"
              name="email-address"
              autocomplete="email"
              required
              class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none sm:text-sm"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="payment-heading" class="mt-10">
        <h2 id="payment-heading" class="text-lg font-medium text-gray-900">
          Payment details
        </h2>

        <div class="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
          <div class="col-span-3 sm:col-span-4">
            <label
              for="card-number"
              class="block text-sm font-medium text-gray-700"
              >Card number</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="card-number"
                v-model="checkoutData.cardNumber"
                name="card-number"
                autocomplete="cc-number"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div class="col-span-2 sm:col-span-3">
            <label
              for="expiration-date"
              class="block text-sm font-medium text-gray-700"
              >Expiration date (MM/YY)</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="expiration-date"
                v-model="checkoutData.expirationDate"
                name="expiration-date"
                autocomplete="cc-exp"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="cvc" class="block text-sm font-medium text-gray-700"
              >CVC</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="cvc"
                v-model="checkoutData.cvc"
                name="cvc"
                autocomplete="csc"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="cardType"
              class="block text-sm font-medium text-gray-700"
              >Card Type</label
            >
            <div class="mt-1">
              <select
                v-model="checkoutData.cardType"
                id="cardType"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              >
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="AmEx">American Express</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="shipping-heading" class="mt-10">
        <h2 id="shipping-heading" class="text-lg font-medium text-gray-900">
          Shipping address
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
          <div class="sm:col-span-3">
            <label for="address" class="block text-sm font-medium text-gray-700"
              >Address</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="address"
                v-model="checkoutData.address"
                name="address"
                autocomplete="street-address"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="city" class="block text-sm font-medium text-gray-700"
              >City</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="city"
                v-model="checkoutData.city"
                name="city"
                autocomplete="address-level2"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="state" class="block text-sm font-medium text-gray-700"
              >State / Province</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="state"
                v-model="checkoutData.state"
                name="state"
                autocomplete="address-level1"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
              >Postal code</label
            >
            <div class="mt-1">
              <input
                type="text"
                id="postal-code"
                v-model="checkoutData.postalCode"
                name="postal-code"
                autocomplete="postal-code"
                required
                class="block w-full rounded-md border-gray-200 border-2 p-2 shadow-sm focus:border-indigo-600 focus:ring-indigo-6000 focus:outline-none sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="mt-10 border-t border-gray-200 pt-6">
        <button
          type="submit"
          class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Place Order
        </button>
      </div>
    </div>
  </form>

  <PaymentConfirmationModal :show="showConfirmationModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '~/stores/cartStore';
import { useRouter } from 'vue-router';
import PaymentConfirmationModal from '../Confirmation/PaymentConfirmationModal.vue';

const cartStore = useCartStore();
const router = useRouter();

const showConfirmationModal = ref(false);

interface CheckoutData {
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  cardType: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

const checkoutData = ref<CheckoutData>({
  email: '',
  cardNumber: '',
  expirationDate: '',
  cvc: '',
  cardType: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
});

const submitCheckout = async () => {
  try {
    const response = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        ...checkoutData.value,
        items: cartStore.items,
        total: cartStore.cartTotal,
        shippingAddress: {
          street: checkoutData.value.address,
          city: checkoutData.value.city,
          state: checkoutData.value.state,
          postalCode: checkoutData.value.postalCode,
        },
      },
    });

    if (response.success) {
      await cartStore.clearCart();

      // Show confirmation modal
      showConfirmationModal.value = true;

      // Wait for 2 seconds before navigating
      setTimeout(() => {
        showConfirmationModal.value = false;
        router.push(`/confirmation/${response.orderId}`);
      }, 2000);
    } else {
      console.error('Checkout failed:', response);
    }
  } catch (error) {
    console.error('Error during checkout:', error);
  }
};
</script>

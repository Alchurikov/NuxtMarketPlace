<template>
  <header class="relative bg-white">
    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center justify-between">
          <a href="/" class="flex">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>

          <div class="flex flex-1 items-center justify-end">
            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <a href="/cart" class="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span
                  class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                  >{{ cartStore.itemCount }}</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '~/stores/cartStore';

const cartStore = useCartStore();

onMounted(() => {
  cartStore.fetchCart();
});
</script>

<template>
  <div class="bg-white">
    <Header />
    <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div class="aspect-h-1 aspect-w-1 w-full">
            <img
              :src="product.image"
              :alt="product.name"
              class="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </div>

          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              {{ product.name }}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">
                ${{ product.price }}
              </p>
            </div>

            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      product.rating > rating
                        ? 'text-indigo-500'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>
              <div class="space-y-6 text-base text-gray-700">
                {{ product.description }}
              </div>
            </div>

            <div class="mt-6">
              <p class="mb-1">Category: {{ product.category }}</p>
              <p class="mb-1">Brand: {{ product.brand }}</p>
              <p class="mb-1">In Stock: {{ product.inStock ? 'Yes' : 'No' }}</p>
            </div>

            <form class="mt-6">
              <div class="mt-10 flex">
                <button
                  type="button"
                  @click="cartStore.addToCart(product)"
                  class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to bag
                </button>
              </div>
            </form>
            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="divide-y divide-gray-200 border-t">
                <Disclosure
                  as="div"
                  v-for="detail in product.details"
                  :key="detail.name"
                  v-slot="{ open }"
                >
                  <h3>
                    <DisclosureButton
                      class="group relative flex w-full items-center justify-between py-6 text-left"
                    >
                      <span
                        :class="[
                          open ? 'text-indigo-600' : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                        >{{ detail.name }}</span
                      >
                      <span class="ml-6 flex items-center">
                        <PlusIcon
                          v-if="!open"
                          class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <MinusIcon
                          v-else
                          class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel as="div" class="prose prose-sm pb-6">
                    <ul role="list">
                      <li v-for="item in detail.items" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StarIcon } from '@heroicons/vue/20/solid';
import type { Product } from '~/types/product';
import { useCartStore } from '~/stores/cartStore';
import Header from '~/components/Header.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';

const open = ref(false);

const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
</script>

<template>
  <div class="bg-white">
    <Header />

    <main class="pb-24">
      <FilterSort @update:filters="applyFilters" @update:sort="applySort" />

      <div class="mt-4">
        <ProductList
          :products="products"
          :total="total"
          :page="page"
          :limit="limit"
        />
      </div>

      <Pagination
        :current-page="page"
        :total-pages="totalPages"
        @update:current-page="updatePage"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types/product.ts';
import FilterSort from '../components/Product/FilterSort.vue';
import Pagination from '../components/Product/Pagination.vue';

const route = useRoute();
const router = useRouter();
const page = computed(() => Number(route.query.page) || 1);
const limit = computed(() => Number(route.query.limit) || 3);

const { data, refresh } = await useFetch('/api/products', {
  params: computed(() => ({
    page: page.value,
    limit: limit.value,
    ...route.query,
  })),
});

const products = computed(() => data.value?.products as Product[]);
const total = computed(() => data.value?.total as number);
const totalPages = computed(() => Math.ceil(total.value / limit.value));

const updatePage = (newPage: number) => {
  router.push({ query: { ...route.query, page: newPage } });
};

const applyFilters = (newFilters: Record<string, any[]>) => {
  const appliedFilters: Record<string, string[]> = {};
  Object.entries(newFilters).forEach(([key, options]) => {
    const selectedOptions = options
      .filter((option) => option.checked)
      .map((option) => option.value);
    if (selectedOptions.length > 0) {
      appliedFilters[key] = selectedOptions;
    }
  });

  const cleanedQuery = { ...route.query };
  Object.keys(newFilters).forEach((key) => delete cleanedQuery[key]);

  router.push({
    query: {
      ...cleanedQuery,
      ...appliedFilters,
      page: 1,
    },
  });
};

const applySort = (sortValue: string) => {
  router.push({ query: { ...route.query, sort: sortValue, page: 1 } });
};
</script>

<template>
  <nav
    aria-label="Pagination"
    class="mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <a
        href="#"
        @click.prevent="onPrevious"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
        class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
      >
        Previous
      </a>
    </div>
    <div class="hidden space-x-2 sm:flex">
      <template v-for="page in visiblePages" :key="page">
        <a
          v-if="page !== '...'"
          href="#"
          @click.prevent="onPageChange(page)"
          :class="{
            'border-indigo-600 ring-1 ring-indigo-600': page === currentPage,
          }"
          class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
        >
          {{ page }}
        </a>
        <span v-else class="inline-flex h-10 items-center px-1.5 text-gray-500"
          >...</span
        >
      </template>
    </div>
    <div class="flex min-w-0 flex-1 justify-end">
      <a
        href="#"
        @click.prevent="onNext"
        :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
        class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
      >
        Next
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits(['update:currentPage']);

const visiblePages = computed(() => {
  const pages = [];
  const maxVisiblePages = 7;

  if (props.totalPages <= maxVisiblePages) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (props.currentPage > 3) {
      pages.push('...');
    }
    for (
      let i = Math.max(2, props.currentPage - 1);
      i <= Math.min(props.totalPages - 1, props.currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (props.currentPage < props.totalPages - 2) {
      pages.push('...');
    }
    pages.push(props.totalPages);
  }

  return pages;
});

const onPageChange = (page: number | string) => {
  emit('update:currentPage', page);
};

const onPrevious = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const onNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1);
  }
};
</script>

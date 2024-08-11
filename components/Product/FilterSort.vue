<template>
  <Disclosure
    as="section"
    aria-labelledby="filter-heading"
    class="grid items-center border-b border-t border-gray-200"
  >
    <h2 id="filter-heading" class="sr-only">Filters</h2>
    <div class="relative col-start-1 row-start-1 py-4">
      <div
        class="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8"
      >
        <div>
          <DisclosureButton
            class="group flex items-center font-medium text-gray-700"
          >
            <FunnelIcon
              class="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {{ activeFiltersCount }} Filters
          </DisclosureButton>
        </div>
        <div class="pl-6">
          <button type="button" class="text-gray-500" @click="clearAllFilters">
            Clear all
          </button>
        </div>
      </div>
    </div>
    <DisclosurePanel class="border-t border-gray-200 py-10">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8"
      >
        <div
          class="grid auto-rows-min grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-6"
        >
          <fieldset v-for="(options, filterName) in filters" :key="filterName">
            <legend class="block font-medium">{{ filterName }}</legend>
            <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
              <div
                v-for="(option, optionIdx) in options"
                :key="option.value"
                class="flex items-center text-base sm:text-sm"
              >
                <input
                  :id="`${filterName}-${optionIdx}`"
                  :name="`${filterName}[]`"
                  :value="option.value"
                  v-model="option.checked"
                  type="checkbox"
                  class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  @change="updateFilters"
                />
                <label
                  :for="`${filterName}-${optionIdx}`"
                  class="ml-3 min-w-0 flex-1 text-gray-600"
                  >{{ option.label }}</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </DisclosurePanel>
    <div class="col-start-1 row-start-1 py-4">
      <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
        <Menu as="div" class="relative inline-block">
          <div class="flex">
            <MenuButton
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sort
              <ChevronDownIcon
                class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem
                  v-for="option in sortOptions"
                  :key="option.name"
                  v-slot="{ active }"
                >
                  <a
                    href="#"
                    :class="[
                      option.current
                        ? 'font-medium text-gray-900'
                        : 'text-gray-500',
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm',
                    ]"
                    @click.prevent="updateSort(option)"
                    >{{ option.name }}</a
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/vue/20/solid';

const filters = ref({
  price: [
    { value: '0-50', label: '$0 - $50', checked: false },
    { value: '50-100', label: '$50 - $100', checked: false },
    { value: '100-200', label: '$100 - $200', checked: false },
    { value: '200+', label: '$200+', checked: false },
  ],
  brand: [
    { value: 'hoka', label: 'Hoka', checked: false },
    { value: 'brooks', label: 'Brooks', checked: false },
    { value: 'new balance', label: 'New Balance', checked: false },
    { value: 'reebok', label: 'Reebok', checked: false },
    { value: 'under armour', label: 'Under Armour', checked: false },
    { value: 'merrell', label: 'Merrell', checked: false },
    { value: 'columbia', label: 'Columbia', checked: false },
    { value: 'cole haan', label: 'Cole Haan', checked: false },
    { value: 'adidas', label: 'Adidas', checked: false },
  ],
  stock: [
    { value: 'true', label: 'In Stock', checked: false },
    { value: 'false', label: 'Out of Stock', checked: false },
  ],
  category: [
    { value: 'running', label: 'Running', checked: false },
    { value: 'walking', label: 'Walking', checked: false },
    { value: 'hiking', label: 'Hiking', checked: false },
  ],
});

const sortOptions = ref([
  { name: 'Best Rating', value: 'rating', current: false },
  { name: 'Price: Low to High', value: 'price_asc', current: false },
  { name: 'Price: High to Low', value: 'price_desc', current: false },
]);

const activeFiltersCount = computed(() => {
  return Object.values(filters.value)
    .flat()
    .filter((option) => option.checked).length;
});

const emit = defineEmits(['update:filters', 'update:sort']);

const updateFilters = () => {
  emit('update:filters', filters.value);
};

const updateSort = (option: any) => {
  sortOptions.value.forEach((opt) => (opt.current = false));
  option.current = true;
  emit('update:sort', option.value);
};

const clearAllFilters = () => {
  Object.values(filters.value)
    .flat()
    .forEach((option) => (option.checked = false));
  updateFilters();
};
</script>

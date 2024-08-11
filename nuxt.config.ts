// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-file-storage'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
});

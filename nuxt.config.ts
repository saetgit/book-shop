// nuxt.config.ts

export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
      autoImports: [
        // Automatically imports `defineStore`
        'defineStore',
      ],
  },
  plugins: ['~/plugins/pinia-persistedstate.js'],
});




// nuxt.config.ts

export default defineNuxtConfig({
  buildModules: [ '@nuxt/http', '@nuxtjs/vuex','@nuxt/auth-next'],
  modules: ['nuxt-swiper'],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: 'https://reqres.in/api/login', method: 'post' },
          logout: false,
          user: false,
        },
      },
    },
  },
  http: {
    baseURL: 'http://localhost:3000',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
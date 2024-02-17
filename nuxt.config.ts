


// nuxt.config.ts

export default defineNuxtConfig({
  buildModules: ['@nuxt/auth-next', '@nuxt/http', '@nuxtjs/vuex',
  ],
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
  modules: ['nuxt-swiper'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
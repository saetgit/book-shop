import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    auth:{
      isLoggedIn: false,
      userInfo:{}
    },
    isInitialized: false,
  }),

  getters: {
   
  },
  actions: {
    logIn(user) {
      this.auth.isLoggedIn = true;
      this.auth.userInfo = user; 
      this.isInitialized = true;
    },
    logOut() {
      this.auth.isLoggedIn = false;
      this.auth.userInfo = {}; 
      this.isInitialized = true;
    },
    initialize() {
      this.isInitialized = true;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: typeof window !== 'undefined' ? localStorage : null,
        paths: ['auth']
      },
    ],
  },
})

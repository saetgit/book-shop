import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    auth:{
      isLoggedIn: false,
      userInfo:{}
    }
  }),

  getters: {
   
  },
  actions: {
    logIn(user) {
      this.auth.isLoggedIn = true;
      this.userInfo = user; 
    },
    logOut() {
      this.auth.isLoggedIn = false;
      this.userInfo = null; 
    },
  },
})

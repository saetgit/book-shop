import { defineStore } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const useUserStore = defineStore('user', {
  state: () => ({
    auth:{
      isLoggedIn: false,
      userInfo: null // اطلاعات کاربر
    }
  }),

  actions: {
    // هنگام ورود کاربر
    logIn(user) {
      this.auth.isLoggedIn = true;
      this.userInfo = user;
    },
    
    // هنگام خروج کاربر
    logOut() {
      this.auth.isLoggedIn = false;
      this.userInfo = null;
    }
  },

  plugins: [createPersistedState()],
})

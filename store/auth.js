// store/auth.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    loggedIn: false,
    user: null,
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
    getUser: (state) => state.user,
    console.log("ssss");
  },
});

export default store;

<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="username">نام کاربری :</label>
        <input v-model="username" type="text" id="username" required>
        
        <label for="password">رمزعبور:</label>
        <input v-model="password" type="password" id="password" required>
        
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        users: [], // Initialize users as an empty array
      };
    },
    async asyncData({ error }) {
      try {
        // Load user data during SSR or generate process
        const users = require('users.json');
        return { users };
      } catch (err) {
        error({ statusCode: 500, message: 'Failed to load user data' });
      }
    },
    methods: {
      register() {
        // Ensure that users is an array before using some method
        if (!Array.isArray(this.users)) {
          console.error('User data is not available');
          return;
        }
  
        // Access user data from asyncData
        const userExists = this.users.some(u => u.username === this.username);
  
        if (userExists) {
          console.error('Username already taken');
        } else {
          console.log('Registration successful');
        }
      },
    },
  };
  </script>
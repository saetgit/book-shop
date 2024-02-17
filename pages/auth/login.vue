<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      @submit.prevent="login"
    >
      صفحه ورود
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          ایمیل
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="ایمیل"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          رمزعبور
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="رمزعبور"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("eve.holt@reqres.in");
const password = ref("cityslicka");

const login = async () => {
  try {
    console.log("Logging in...");
    const response = await axios.post("https://reqres.in/api/login", {
      email: email.value,
      password: password.value,
    });

    // Implement your store logic here

    router.push("/");
    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

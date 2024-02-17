<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
      <h2 class="text-2xl font-bold mb-4">ثبت نام</h2>
      <form @submit.prevent="register">
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
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { createStore } from "vuex";

const store = createStore();

const email = ref("");
const password = ref("");
const router = useRouter();

const loggedInUser = computed(() => store.getters.isLoggedIn);

const register = async () => {
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email: email.value,
      password: password.value,
    });

    console.log(response.data);

    router.push("/auth/login");
  } catch (error) {
    console.error("Register failed:", error);
    if (error.response) {
      error.value = error.response.data.error;
    } else {
      error.value = "An unexpected error occurred.";
    }
  }
};
</script>

<template>
  <div class="container mx-auto">
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@nuxtjs/auth-next";
import { useRouter } from "vue-router";

const form = ref({
  email: "",
  password: "",
});

const { login } = useAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    await login("local", { data: form.value });
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
</script>

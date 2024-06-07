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
import { reactive, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const login = async () => {
  let result = await axios.get(
    `http://localhost:8000/users?email=${form.email}&password=${form.password}`
  );
  if (result.status == 200 && result.data.length > 0) {
    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
    alert("اضافه شد");
    router.push("/");
  }
};
onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (user) {
    router.push("/");
  }
});

const onSubmit = (event) => {
  event.preventDefault();
  login();
};

// "https://book-shop-api.hosseinbajan.ir/api/v1/users/register",
</script>

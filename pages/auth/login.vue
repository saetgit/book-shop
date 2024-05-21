<template>
  <div class="container mx-auto">
    <form v-if="show" @submit.prevent="onSubmit">
      <div class="flex flex-col lg:w-1/4">
        <div class="mb-4">
          <label for="username" class="block text-gray-700">نام کاربری</label>
          <input
            id="username"
            v-model="form.email"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">رمزعبور</label>
          <input
            id="password"
            v-model="form.password"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded">
          ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";

const form = ref({
  email: "",
  password: "",
});

const show = ref(true);
const { login } = useAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    await login(form.value);
    router.push(router.currentRoute.value.query.redirect || "/");
  } catch (error) {
    // handle error
  }
};
</script>

<style scoped>
.wrapper {
  margin: 10%;
}
</style>

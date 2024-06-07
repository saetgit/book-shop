<template>
  <div class="container mx-auto">
    <form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
      <div class="flex flex-col w-full lg:w-1/2">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">نام</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="family" class="block text-gray-700">نام خانوادگی</label>
          <input
            id="family"
            v-model="form.family"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">ایمیل</label>
          <input
            id="email"
            v-model="form.email"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="username" class="block text-gray-700">نام کاربری</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">رمزعبور</label>
          <input
            id="password"
            v-model="form.password"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="mobile" class="block text-gray-700">موبایل</label>
          <input
            id="mobile"
            v-model="form.mobile"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-700">سن</label>
          <input
            id="age"
            v-model="form.age"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="website" class="block text-gray-700">وب سایت</label>
          <input
            id="website"
            v-model="form.website"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label for="sex" class="block text-gray-700">جنسیت</label>
          <input
            id="sex"
            v-model="form.sex"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded">
          ثبت نام
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const form = ref({
  name: "",
  family: "",
  email: "",
  username: "",
  password: "",
  mobile: "",
  age: "",
  website: "",
  sex: "",
});

const show = ref(true);
const router = useRouter();

const register = async () => {
  try {
    const res = await axios.post("http://localhost:8000/users", form.value);
    if (res.status == 201) {
      localStorage.setItem("user-info", JSON.stringify(res.data));
      alert("اضافه شد");
      router.push("/");
    } else {
      alert("خطا در سمت سرور");
    }
  } catch (error) {
    alert("خطا در سمت سرور");
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  register();
};

const onReset = (event) => {
  event.preventDefault();
  show.value = false;
  nextTick(() => {
    show.value = true;
  });
};

// "https://book-shop-api.hosseinbajan.ir/api/v1/users/register",
</script>

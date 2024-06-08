<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="bg-[#EFEEE8] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      @submit.prevent="onSubmit"
      @reset="onReset"
    >
      <div class="text-center text-xl font-bold mb-4">صفحه ثبت نام</div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="name">
          نام
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          v-model="form.name"
          placeholder="نام"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="family">
          نام خانوادگی
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="family"
          type="text"
          v-model="form.family"
          placeholder="نام خانوادگی"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="email">
          ایمیل
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          v-model="form.email"
          placeholder="ایمیل"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="username">
          نام کاربری
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="form.username"
          placeholder="نام کاربری"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="password">
          رمزعبور
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          v-model="form.password"
          placeholder="رمزعبور"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="mobile">
          موبایل
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="text"
          v-model="form.mobile"
          placeholder="موبایل"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="age"> سن </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="text"
          v-model="form.age"
          placeholder="سن"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="website">
          وب سایت
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="website"
          type="text"
          v-model="form.website"
          placeholder="وب سایت"
        />
      </div>
      <div class="mb-4">
        <label class="block text-[#daa556] text-sm font-bold mb-2" for="sex">
          جنسیت
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
          id="sex"
          type="text"
          v-model="form.sex"
          placeholder="جنسیت"
        />
      </div>
      <button
        type="submit"
        class="bg-[#c2a67f] hover:bg-[#daa556] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        ثبت نام
      </button>
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
      alert(" اطلاعات ذخیره تشد  ");
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

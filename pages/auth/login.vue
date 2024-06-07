<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="bg-[#EFEEE8] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      @submit.prevent="onSubmit"
      @reset="onReset"
    >
      صفحه ورود
      <div class="mb-4">
        <div :class="{ error: v$.email.$errors.length }" class="text-[#6d5532] text-sm">
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
          <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
            <div class="error-msg mt-2">{{ rules.email.$message }}</div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div
          :class="{ error: v$.password.$errors.length }"
          class="text-[#6d5532] text-sm"
        >
          <label class="block text-[#daa556] text-sm font-bold mb-2" for="password">
            رمزعبور
          </label>
          <input
            v-model="form.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            :class="{ error: v$.password.$errors.length }"
            type="password"
            placeholder="رمزعبور"
          />
          <div
            class="input-errors"
            v-for="error of v$.password.$errors"
            :key="error.$uid"
          >
            <div class="error-msg mt-2">{{ rules.password.$message }}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-[#c2a67f] hover:bg-[#daa556] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const login = async () => {
  v$.value.$touch();

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
const rules = computed(() => {
  return {
    email: { required, email, $message: "لطفاً یک ایمیل معتبر وارد کنید." },
    password: {
      required,
      minLength: minLength(6),
      $message: "رمزعبور باید حداقل ۶ کاراکتر داشته باشد.",
    },
  };
});
const v$ = useVuelidate(rules, form);

const onReset = (event) => {
  event.preventDefault();
  show.value = false;
  nextTick(() => {
    show.value = true;
  });
};
</script>

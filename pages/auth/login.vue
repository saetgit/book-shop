<template>
  <div class="min-h-screen flex items-center justify-center">
    <form
      class="bg-[#EFEEE8] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      @submit.prevent="login"
    >
      <div class="text-center text-xl font-bold mb-4">صفحه ورود</div>
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
            type="password"
            placeholder="رمزعبور را وارد کنید"
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
import { reactive, computed } from "vue";
import { getUser } from "~/api/appService";
import axios from "axios";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

const login = async () => {
  // v$.value.$touch();

  try {
    console.log("Logging in...");
    console.log(unref(v$).$validate());
    if (v$.value.$error) {
      showError("لطفاً اطلاعات ورود را به درستی وارد کنید");
      return;
    }

    const result = await getUser(form.email, form.password);

    if (result.status == 200 && result.data.length > 0) {
      userStore.logIn(result.data[0]);
      router.push("/");
      console.log("Login successful!", result.data[0]);
    } else {
      console.error("Login failed:", result);
      showError("ایمیل یا رمزعبور اشتباه است");
    }
    return;
  } catch (error) {
    console.error("Login failed:", error);
    showError("خطا در ورود به سیستم");
  }
};

const showError = (message) => {
  alert(message);
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
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-[#EFEEE8] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
      <form @submit.prevent="register">
        <div class="mb-4">
          <div :class="{ error: v$.email.$errors.length }" class="text-[#6d5532] text-sm">
            <label class="block text-[#daa556] text-sm font-bold mb-2" for="email">
              ایمیل
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 bg-[#f5f4ef] text-[#777] leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              v-model="state.email"
              placeholder="ایمیل"
            />
            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <div class="error-msg mt-2">{{ rules.email.$message }}</div>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <div
            :class="{ error: v$.password.$errors.length }"
            class="text-[#6d5532] text-sm"
          >
            <label class="block text-[#daa556] text-sm font-bold mb-2" for="password">
              رمزعبور
            </label>
            <input
              v-model="state.password"
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
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { createStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const store = createStore();
const state = reactive({
  email: "",
  password: "",
});
const router = useRouter();

const loggedInUser = computed(() => store.getters.isLoggedIn);

const register = async () => {
  v$.value.$touch();

  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email: state.email,
      password: state.password,
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
const v$ = useVuelidate(rules, state);
</script>

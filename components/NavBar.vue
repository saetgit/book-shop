<template>
  <header>
    <nav>
      <div
        class="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between py-5 bg-[#f3f2ec] border-b-[1px] border-solid border-[#E0E0E0]"
      >
        <div class="flex items-center space-x-4">
          <router-link :to="'/'">
            <img src="/static/images/main-logo.png" class="h-10" alt="Logo" />
          </router-link>
          <ul
            class="flex items-center text-[#777] cursor-pointer font-iransans font-semibold"
          >
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              @click="handleItemClick(index)"
              :class="{ active: activeItem === index }"
              class="px-3 py-5 cursor-pointer hover:text-[#c2a67f]"
            >
              <router-link :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="flex items-center space-x-4">
          <div v-if="!userStore.$state.isInitialized">
            <img src="/static/images/loading.svg" class="h-10" alt="loading" />
          </div>
          <div v-else class="flex items-center space-x-4">
            <div
              v-if="!userStore.$state.auth.isLoggedIn"
              class="px-3 py-5 cursor-pointer hover:text-[#c2a67f]"
            >
              <router-link :to="'/auth/login'">ورود</router-link>
            </div>
            <div
              v-if="!userStore.$state.auth.isLoggedIn"
              class="px-3 py-5 cursor-pointer hover:text-[#c2a67f]"
            >
              <router-link :to="'/auth/register'">ثبت نام</router-link>
            </div>
          </div>
          <div v-if="userStore.$state.auth.isLoggedIn">
            <div @click="logOut" class="px-3 py-5 cursor-pointer hover:text-[#c2a67f]">
              <span>خروج</span>
            </div>
          </div>
          <router-link :to="'/cart'" class="flex">
            <img src="/static/icons/bag.svg" class="h-5 w-5" alt="bag" />
            {{ cartStore.countCartItems }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { useShoppingStore } from "../stores/cart";

const userStore = useUserStore();
const cartStore = useShoppingStore();
const router = useRouter();

const logOut = () => {
  router.push("/auth/login");
  userStore.logOut();
};

const activeItem = ref(null);
const menuItems = ref([
  { name: "خانه", url: "/" },
  { name: "درباره ما", url: "/about" },
  { name: "ارتباط با ما", url: "/contact" },
  { name: "فروش", url: "/sales" },
]);

const handleItemClick = (index) => {
  activeItem.value = index;
};

onMounted(async () => {
  await userStore.initialize();
  await cartStore.loadCart();
});
</script>

<style scoped>
.active {
  color: #daa556;
}
</style>

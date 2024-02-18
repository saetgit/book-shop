<script setup>
import { ref } from "vue";

const activeItem = ref(null);
const menuItems = ref([
  { name: "خانه", url: "/" },
  { name: "درباره ما", url: "/about" },
  { name: "ارتباط با ما", url: "/contact" },
  { name: "فروش", url: "/sales" },
  { name: "ورود", url: "/auth/login" },
  { name: "ثبت نام", url: "/auth/register" },
]);

const handleItemClick = (index) => {
  activeItem.value = index;
};
</script>

<style scoped>
/* Add the styles as needed */
.active {
  color: #daa556;
}
</style>

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
        <div>
          <div><span>خروج</span></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<template>
  <Swiper
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <div class="p-10 flex justify-center">
        <img :src="slide.picture" class="w-auto h-[500px] mx-10" />
        <div class="block items-center">
          <div class="text-[40px] mb-4 text-[#222]">{{ slide.title }}</div>
          <div class="w-[400px] text-justify text-[#7f7974]">{{ slide.description }}</div>

          <button
            type="button"
            class="w-[100px] text-[#c2a67f] border-2 border-[#c2a67f] text-center rounded-lg py-2 font-semibold mt-4 hover:bg-[#daa556] hover:text-white hover:cursor-pointer"
            @click="data.addToCart(slide)"
          >
            خرید
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useShoppingStore } from "../stores";

const data = useShoppingStore();
const slides = ref([]);

// فراخوانی تابع getBooks از apiService
import { getBooks } from "~/api/appService";

onMounted(async () => {
  try {
    // فراخوانی تابع getBooks برای دریافت داده‌های کتاب‌ها
    const response = await getBooks();
    slides.value = response.data;
  } catch (error) {
    console.error("Error loading slides:", error);
  }
});
</script>

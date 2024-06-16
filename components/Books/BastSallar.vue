<template>
  <div class="my-3 text-center">
    <div class="text-center border-t border-b py-4 mb-4">پرفروش‌ترین کتاب</div>

    <div v-if="book" class="flex justify-center mx-[200px]">
      <div class=""><img :src="book.picture" class="w-auto h-auto mx-10" /></div>
      <div class="block items-center mt-[50px]">
        <h1 class="text-[40px] mb-4 text-[#c2a67f]">{{ book.title }}</h1>
        <h6 class="w-[400px] text-justify text-[#7f7974] mt-3">{{ book.description }}</h6>
        <div class="text-[#c2a67f] mt-5" v-if="book.price !== undefined">
          قیمت: $ {{ book.price.toFixed(2) }}
        </div>
        <button
          type="button"
          class="bg-[#daa556] text-white w-[200px] h-10"
          @click="data.addToCart(book)"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from "../stores/cart";
const data = useShoppingStore();
const props = defineProps(["book"]);
import { onMounted } from "vue";

onMounted(async () => {
  await data.loadProducts();
});
</script>

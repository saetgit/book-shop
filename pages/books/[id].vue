<template>
  <div class="flex justify-between p-8 min-h-screen">
    <div class="w-1/2">
      <img
        :src="'/' + book.picture"
        class="h-auto w-[200px] m-auto pt-4"
        alt="Book Cover"
      />
    </div>
    <div class="w-1/2 px-8">
      <h1 class="text-3xl font-bold mb-4 text-[#ac864d]">{{ book.title }}</h1>
      <p class="text-[#777] mb-2">
        نام نویسنده: <span class="text-[#daa556] text-lg mb-4">{{ book.author }}</span>
      </p>

      <p class="text-[#777] mb-2">
        دسته بندی: <span class="text-[#daa556] text-lg mb-4">{{ book.category }}</span>
      </p>
      <p class="text-[#777] mb-2">
        تعداد فروش:
        <span class="text-[#daa556] font-semibold text-lg mb-4">{{ book.sales }}</span>
      </p>
      <p class="text-[#777] mb-2">
        توضیحات: <span class="text-[#daa556] text-lg mb-4">{{ book.description }}</span>
      </p>
      <p class="text-[#777] mb-2">
        قیمت:
        <span class="text-[#daa556] text-lg font-semibold mb-4"
          >{{ book.price }}تومان</span
        >
      </p>
      <button
        class="bg-[#ac864d] hover:bg-[#daa556] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="data.addToCart(book)"
      >
        خرید
      </button>
      <!-- سایر اطلاعات کتاب -->
    </div>
  </div>
</template>

<script setup>
import { getBooksId } from "~/api/appService";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const itemId = route.params.id;
const book = ref({});
import { useShoppingStore } from "../stores";
const data = useShoppingStore();
onMounted(async () => {
  try {
    const response = await getBooksId(itemId);
    if (response && response.data) {
      // Update book value with the response data
      book.value = response.data;
      console.log("Book:", book.value);
    } else {
      console.error("Invalid response format:", response);
    }
  } catch (error) {
    console.error("Error loading book:", error);
  }
});
</script>

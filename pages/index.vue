<template>
  <div>
    <SlideBar />
    <div class="text-center border-t border-b py-4 mb-4">کتاب های برگزیده</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-5">
      <BooksBook v-for="book in booksData.slice(0, 4)" :key="book.id" :book="book" />
    </div>
    <div><SectionLogo /></div>
    <div><BooksBastSallar :book="bestSeller" /></div>
    <div><BooksCategories /></div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useShoppingStore } from "../stores/cart";
const data = useShoppingStore();
const booksData = ref([]);
const bestSeller = ref({});
import { getBooks } from "~/api/appService";

onMounted(async () => {
  try {
    const response = await getBooks();
    booksData.value = response.data;
    // یافتن پرفروش‌ترین کتاب
    bestSeller.value = booksData.value.reduce(
      (max, book) => (book.sales > max.sales ? book : max),
      booksData.value[0]
    );
  } catch (error) {
    console.error("Error loading books:", error);
  }
});
</script>

<template>
  <div>
    <SlideBar />
    <div class="text-center border-t border-b py-4 mb-4">کتاب های برگزیده</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-5">
      <BooksBook v-for="book in booksData.slice(0, 4)" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const booksData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("book.json");
    booksData.value = response.data;
  } catch (error) {
    console.error("Error loading books:", error);
  }
});
</script>

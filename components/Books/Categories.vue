<template>
  <div>
    <div class="text-center border-t border-b py-4 mb-4">محبوب‌ترین کتاب‌ها</div>
    <div
      class="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-center bg-[#ac864d] border-b-[1px] border-solid border-[#E0E0E0]"
    >
      <ul
        class="flex justify-center items-center text-[#fff] cursor-pointer font-iransans font-semibold"
      >
        <li
          v-for="(category, index) in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          class="px-3 py-4 cursor-pointer hover:text-[#ccc]"
        >
          <button @click="selectCategory(category)">{{ category }}</button>
        </li>
      </ul>
    </div>
    <div v-if="selectedCategory">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-5">
        <BooksBook
          v-for="book in getBooksInCategory(selectedCategory)"
          :key="book.id"
          :book="book"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const categories = ref([]);
const selectedCategory = ref("علمی");
const books = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/books");
    console.log("-----------------", response);

    books.value = response.data;

    // استخراج دسته‌بندی‌ها از داده‌های ~/data/books.json
    categories.value = Array.from(new Set(books.value.map((book) => book.category)));
  } catch (error) {
    console.error("Error loading books:", error);
  }
});
const selectCategory = (category) => {
  selectedCategory.value = category;
};

const getBooksInCategory = (category) => {
  return books.value.filter((book) => book.category === category);
};
</script>

<style scoped>
/* اضافه کردن استایل‌ها به عنوان نیاز دارید */
.active {
  color: #daa556;
}
</style>

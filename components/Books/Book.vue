<template>
    <div @mouseenter="showButton = true" @mouseleave="showButton = false" class="text-center mb-8">
      <div class="product-item relative bg-[#EFEEE8] w-full m-auto">
        <img :src="book.picture" class="h-auto w-[200px] m-auto pt-4" alt="Book Cover" />
        <transition name="fade">
          <button v-show="showButton" type="button" class="add-to-cart absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white w-[200px] h-10" @click="addToCart(book)">افزودن به سبد خرید</button>
        </transition>
      </div>
      <figcaption class="mt-8">
        <h3 class="text-[#c2a67f]">{{ book.title }}</h3>
        <h6 class="text-[#7f7974] mt-3">{{ book.author }}</h6>
        <div class="text-[#c2a67f] mt-5">$ {{ book.price.toFixed(2) }}</div>
      </figcaption>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps(['book']);
  const showButton = ref(false);
  
  const addToCart = () => {
    // Implement your add to cart logic here
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
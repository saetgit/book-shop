<!-- Cart.vue -->

<template>
    <div>
      <h2>سبد خرید</h2>
      <ul>
        <li v-for="book in cart" :key="book.id">
          {{ book.title }} - {{ book.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['cart']);
  const cart = ref(props.cart);
  </script>
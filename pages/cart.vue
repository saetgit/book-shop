<template>
  <div>
    <h1>سبد خرید</h1>
    <div v-if="cartItems.length === 0">
      <p>سبد خرید شما خالی است.</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index">
        <p>
          {{ item.title }} - تعداد: {{ item.quantity }} - قیمت: ${{
            item.price.toFixed(2)
          }}
        </p>
      </div>
      <p>تعداد کل: {{ totalQuantity }}</p>
      <p>جمع کل: ${{ totalPrice.toFixed(2) }}</p>
      <button @click="checkout">ثبت نهایی</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cartItems = computed(() => store.state.cart.cartItems);
const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});
const checkout = () => {
  // اینجا کد برای ثبت نهایی سفارش را قرار دهید
};
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-full">
    <img src="/static/images/loading.svg" class="h-10" alt="loading" />
  </div>
  <div v-else>
    <div v-if="cartItems.length === 0" class="text-center py-4">
      <p>سبد خرید خالی است</p>
    </div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/12 py-2">#</th>
            <th class="w-1/12 py-2">عکس محصول</th>
            <th class="w-3/12 py-2">نام محصول</th>
            <th class="w-2/12 py-2">تعداد محصول</th>
            <th class="w-2/12 py-2">قیمت محصول</th>
            <th class="w-1/12 py-2"></th>
            <th class="w-2/12 py-2">جمع</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="item.id" class="border-b">
            <td class="py-2 text-center">{{ index + 1 }}</td>
            <td class="py-2 text-center">
              <img
                :src="item.picture"
                class="fluid rounded w-14 h-14"
                :alt="item.title"
              />
            </td>
            <td class="py-2 text-center">{{ item.title }}</td>
            <td class="py-2 text-center">
              <button
                @click="incrementQ(item)"
                class="px-2 py-1 bg-blue-500 text-white rounded"
              >
                +
              </button>
              <span class="mx-2">{{ item.quantity }}</span>
              <button
                @click="decrementQ(item)"
                class="px-2 py-1 bg-red-500 text-white rounded"
              >
                -
              </button>
            </td>
            <td class="py-2 text-center">${{ item.price }}</td>
            <td class="py-2 text-center">
              <span
                class="bi bi-cart-x text-red-500 cursor-pointer"
                @click="removeFromCart(item)"
                >x</span
              >
            </td>
            <td class="py-2 text-center">${{ item.price * item.quantity }}</td>
          </tr>
          <tr>
            <th colSpan="5" class="text-center py-2">قیمت کل</th>
            <td colSpan="2" class="text-center py-2">
              <span class="badge bg-red-500 text-white rounded-full px-4 py-1">
                ${{ totalCartPrice }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from "../stores/cart";
import { ref, onMounted } from "vue";

const cartStore = useShoppingStore();
const {
  cartItems,
  incrementQ,
  decrementQ,
  removeFromCart,
  totalCartPrice,
  loadCart,
} = cartStore;

const isLoading = ref(true);

// Load cart items when component is mounted
onMounted(async () => {
  await loadCart();
  isLoading.value = false;
});
</script>

<style>
i {
  cursor: pointer;
}
</style>

<template>
  <div class="overflow-x-auto">
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
        <tr v-for="item in data.getCartItems" :key="item.id" class="border-b">
          <td class="py-2 text-center">{{ item.id }}</td>
          <td class="py-2 text-center">
            <img :src="item.picture" class="fluid rounded w-14 h-14" :alt="item.name" />
          </td>
          <td class="py-2 text-center">{{ item.name }}</td>
          <td class="py-2 text-center">
            <button
              @click="data.incrementQ(item)"
              class="px-2 py-1 bg-blue-500 text-white rounded"
            >
              +
            </button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button
              @click="data.decrementQ(item)"
              class="px-2 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
          </td>
          <td class="py-2 text-center">${{ item.price }}</td>
          <td class="py-2 text-center">
            <i
              @click="data.removeFromCart(item)"
              class="bi bi-cart-x text-red-500 cursor-pointer"
            ></i>
          </td>
          <td class="py-2 text-center">${{ item.price * item.quantity }}</td>
        </tr>
        <tr>
          <th colSpan="5" class="text-center py-2">قیمت کل</th>
          <td colSpan="2" class="text-center py-2">
            <span class="badge bg-red-500 text-white rounded-full px-4 py-1">
              ${{
                data.cartItems.reduce(
                  (acc, item) => (acc += item.price * item.quantity),
                  0
                )
              }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useShoppingStore } from "../stores";
//get store
const data = useShoppingStore();
</script>

<style>
i {
  cursor: pointer;
}
</style>

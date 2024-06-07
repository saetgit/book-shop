<template>
  <div class="bg-[#EDEBE4] py-[105px]">
    <div class="logo-wrap">
      <div class="flex justify-center">
        <a v-for="client in clients" :key="client.id" href="#">
          <img :src="client.picture" :alt="'client ' + client.id">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const clients = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('logo.json');
    clients.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div class="bg-[#EDEBE4] py-[105px]">
    <div class="logo-wrap">
      <div class="flex justify-center">
        <a v-for="client in clients" :key="client.id" href="#">
          <img :src="client.picture" :alt="'client ' + client.id" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const clients = ref([]);

import { getLogos } from "~/api/appService";

onMounted(async () => {
  try {
    const response = await getLogos();
    clients.value = response.data;
  } catch (error) {
    console.error("Error loading slides:", error);
  }
});
</script>

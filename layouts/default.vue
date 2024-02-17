<template>
  <div>
    <NavBar />
    <div class="container mx-auto mt-8">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
</script>

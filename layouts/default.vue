<template>
  <div class="" dir="rtl">
    <NavBar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="hero-section">
    <Navbar></Navbar>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  background: url('/images/home/desktop/image-hero.jpg') center/cover no-repeat;
}
</style>

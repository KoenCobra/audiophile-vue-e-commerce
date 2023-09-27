<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="headphones-hero">
    <Navbar />
    <p>headphones</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.headphones-hero {
  height: 336px;
  background-color: $black;
  position: relative;
  p {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1.429px;
    text-transform: uppercase;
    color: $white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
}
</style>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="checkout-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.checkout-layout {
  max-width: 1100px;
  margin-inline: auto;
}
</style>

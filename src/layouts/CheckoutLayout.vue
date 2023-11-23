<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import CartPopup from '@/components/CartPopup.vue'
</script>

<template>
  <Navbar />
  <CartPopup />
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

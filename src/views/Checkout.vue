<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
</script>

<template>
  <div class="checkout-page">
    <div class="back-btn">
      <BackButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.checkout-page {
  .back-btn {
    padding-block: 1rem;
  }
}
</style>

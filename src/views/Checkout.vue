<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
import Summary from '@/components/Summary.vue'
</script>

<template>
  <div class="checkout-page">
    <div class="back-btn">
      <BackButton />
    </div>
    <div class="checkout-details">
      <div class="checkout-form">
        <h1>Checkout</h1>
        <h4>Billing details</h4>
      </div>
      <div class="checkout-summary">
        <Summary />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.checkout-page {
  .back-btn {
    padding-block: 1.5rem;
  }

  .checkout-details {
    display: grid;
    grid-template-columns: 70% 30%;
  }
}
</style>

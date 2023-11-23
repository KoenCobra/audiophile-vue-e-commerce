<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'
import Summary from '@/components/Summary.vue'
</script>

<template>
  <div class="checkout-page">
    <div class="back-btn">
      <BackButton />
    </div>
    <div class="checkout-details">
      <CheckoutForm />
      <Summary />
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

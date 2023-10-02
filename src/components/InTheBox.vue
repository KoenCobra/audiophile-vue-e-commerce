<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
</script>

<template>
  <div class="features-section">
    <div class="features">
      <h2>features</h2>
      <p>
        {{ productStore.product?.features }}
      </p>
    </div>
    <div class="in-the-box">
      <h2>in the box</h2>
      <div class="includes" v-for="(item, index) in productStore.product?.includes" :key="index">
        <span class="quantity"> {{ item.quantity }}x </span>
        <span class="item"> {{ item.item }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.features-section {
  display: grid;
  grid-template-columns: 58% 42%;
  justify-content: center;
  margin-top: 120px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    font-size: 0.9375rem;
    font-weight: 500;
    opacity: 0.5;
    white-space: pre-line;
  }

  .in-the-box {
    justify-self: center;
    .includes {
      display: flex;
      gap: 2rem;
      font-size: 0.9375rem;
      font-weight: 500;
      .quantity {
        color: $orange;
      }

      .item {
        opacity: 0.5;
      }
    }
  }
}
</style>

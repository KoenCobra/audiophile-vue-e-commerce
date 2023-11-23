<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <div class="summary">
    <h2>Summary</h2>
    <div class="summary-cart-items">
      <div v-for="item in cartStore.cart" :key="item.productID" class="summary-cart-item">
        <img :src="` /${item.productImage}`" alt="img" />
        <div class="cart-items-detail">
          <p>{{ item.productName.replace(/Headphones|Speaker|Earphones/g, '') }}</p>
          <span>${{ item.price }}</span>
        </div>
        <div class="cart-items-quantity">
          <p>x{{ item.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.summary {
  background-color: $white;
  padding: 1.5rem;

  h2 {
    margin-bottom: 2rem;
  }

  .summary-cart-items {
    display: grid;
    gap: 1.5rem;

    .summary-cart-item {
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      align-items: center;

      img {
        width: 64px;
        height: 64px;
        border-radius: 8px;
      }

      .cart-items-detail {
        display: flex;
        flex-direction: column;
        justify-self: start;
        flex-grow: 1;
        font-weight: 700;

        p {
          font-size: 0.9375rem;
        }

        span {
          font-size: 0.8125rem;
          opacity: 0.5;
        }
      }

      .cart-items-quantity {
        font-weight: 700;
        opacity: 0.5;
        font-size: 0.9375rem;
      }
    }
  }
}
</style>

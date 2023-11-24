<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import PrimaryLink from './PrimaryLink.vue'
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
          <span>$ {{ item.price }}</span>
        </div>
        <div class="cart-items-quantity">
          <p>x{{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <div class="totals">
      <div class="total">
        <p>Total</p>
        <span>$ {{ cartStore.cartTotal }}</span>
      </div>
      <div class="total">
        <p>Shipping</p>
        <span>$ 50</span>
      </div>
      <div class="total">
        <p>VAT (INCLUDED)</p>
        <span>$ {{ Math.floor((cartStore.cartTotal / 100) * 21) }}</span>
      </div>
      <div class="total grand-total">
        <p>Grand Total</p>
        <span>$ {{ cartStore.cartTotal + 50 }}</span>
      </div>
    </div>

    <div class="checkout-btn">
      <PrimaryLink @click="$emit('submit-checkout')" text="continue & pay" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.summary {
  background-color: $white;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;

  h2 {
    margin-bottom: 2rem;
  }

  .totals {
    display: grid;
    gap: 0.5rem;
    margin-block: 2rem;

    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        opacity: 0.5;
        font-size: 0.9375rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      span {
        font-size: 1.125rem;
        font-weight: 700;
      }

      &.grand-total {
        margin-top: 1rem;
        span {
          color: $orange;
        }
      }
    }
  }

  .checkout-btn {
    .primary-btn {
      display: block;
      text-align: center;
      width: 100% !important;
    }
  }
}
</style>

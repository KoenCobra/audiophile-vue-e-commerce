<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'
import PrimaryLink from './PrimaryLink.vue'

const cartStore = useCartStore()
</script>

<template>
  <div v-if="cartStore.isCartVisible" class="cart">
    <div @click="cartStore.isCartVisible = false" class="overlay"></div>
    <div class="cart-popup">
      <div class="cart-header">
        <p>Cart({{ cartStore.cart.length }})</p>
        <span @click="cartStore.clearCart">Remove all</span>
      </div>
      <div class="empty-cart" v-if="!cartStore.cart.length">Your cart is empty</div>
      <div v-else class="cart-items">
        <div class="cart-item" v-for="(item, index) in cartStore.cart" :key="index">
          <img loading="lazy" :src="`/${item.productImage}`" alt="img" />
          <div class="cart-item-details">
            <p>{{ item.productName }}</p>
            <span>${{ item.price }}</span>
          </div>
          <div class="add-to-cart">
            <button @click="cartStore.decreaseQuantityFromCartItem(item)">-</button>
            <div class="cart-item-number">{{ item.quantity }}</div>
            <button @click="cartStore.increaseQuantityFromCartItem(item)">+</button>
          </div>
        </div>
      </div>
      <div class="total">
        <p>Total</p>
        <span>${{ cartStore.cartTotal }}</span>
      </div>
      <div @click="cartStore.isCartVisible = false" class="checkout-btn">
        <PrimaryLink text="checkout" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
}

.cart-popup {
  padding: 2rem;
  border-radius: 8px;
  position: fixed;
  top: 13%;
  right: 12%;
  background-color: white;
  z-index: 11;
  max-height: 60vh;
  overflow-y: auto;
  min-width: 20rem;

  .empty-cart {
    margin-bottom: 2rem;
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    p {
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: 1.286px;
      text-transform: uppercase;
    }
    span {
      font-size: 0.9375rem;
      font-weight: 500;
      text-decoration-line: underline;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  .cart-items {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      img {
        height: 64px;
        width: 64px;
        border-radius: 8px;
      }
    }

    .cart-item-details {
      display: flex;
      flex-direction: column;
      justify-self: start;
      flex-grow: 1;
      p {
        font-size: 0.9375rem;
        font-weight: 700;
      }
      span {
        font-size: 0.75rem;
        font-weight: 700;
        opacity: 0.5;
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    p {
      font-size: 0.9375rem;
      font-weight: 500;
      opacity: 0.5;
      text-transform: uppercase;
    }
    span {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;
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

.add-to-cart button {
  padding: 0.4rem 0.75rem !important;
}
</style>

<script lang="ts" setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const increaseQuantity = () => {
  cartStore.cartItemQuantity++
}

const decreaseQuantity = () => {
  if (cartStore.cartItemQuantity > 1) {
    cartStore.cartItemQuantity--
  }
}
</script>

<template>
  <div class="add-to-cart">
    <button @click="decreaseQuantity">-</button>
    <div class="cart-item-number">{{ cartStore.cartItemQuantity }}</div>
    <button @click="increaseQuantity">+</button>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.add-to-cart {
  background-color: $grey;
  display: flex;
  align-items: center;

  & > * {
    padding: 0.8rem 1.5rem;
  }

  button {
    font-size: 0.8125rem;
    font-weight: 700;
    transition: $transition;
    color: $black;
    opacity: 0.25;
    &:hover {
      color: $orange;
    }
  }
}
</style>

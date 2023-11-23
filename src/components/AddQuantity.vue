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

<style lang="scss" scoped></style>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  <Toast position="bottom-center" />
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useProductStore } from './stores/productStore'
import { useCartStore } from './stores/cartStore'
import Toast from 'primevue/toast'

const cartStore = useCartStore()
const productStore = useProductStore()

watchEffect(() => {
  if (cartStore.isCartVisible) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

watchEffect(() => {
  if (productStore.isMobileMenuVisible) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

onMounted(async () => {
  await productStore.getProducts()
  cartStore.cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cartStore.cartTotal = JSON.parse(localStorage.getItem('cartTotal') || '0')
})
</script>

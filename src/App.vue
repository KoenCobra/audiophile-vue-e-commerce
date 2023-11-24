<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from './stores/productStore'
import { useCartStore } from './stores/cartStore'
import Toast from 'primevue/toast'

const cartStore = useCartStore()
const productStore = useProductStore()

onMounted(async () => {
  await productStore.getProducts()
  cartStore.cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cartStore.cartTotal = JSON.parse(localStorage.getItem('cartTotal') || '0')
})
</script>

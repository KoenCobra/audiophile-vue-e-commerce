<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from './stores/productStore'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.getProducts()
})
</script>

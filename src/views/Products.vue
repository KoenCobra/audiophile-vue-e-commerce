<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

productStore.navbarClass = 'navbar-section'
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>

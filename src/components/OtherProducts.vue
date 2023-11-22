<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'
import PrimaryLink from './PrimaryLink.vue'

const productStore = useProductStore()
const { product } = storeToRefs(productStore)
</script>

<template>
  <h2>YOU MAY ALSO LIKE</h2>
  <div class="other-products">
    <div v-for="(item, index) in product?.others" :key="index" class="other-product">
      <img :src="`/${item.image.desktop}`" alt="other" />
      <h3>{{ item.name }}</h3>
      <PrimaryLink />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-inline: auto;
  margin-top: 10rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.143px;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.other-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  .other-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>

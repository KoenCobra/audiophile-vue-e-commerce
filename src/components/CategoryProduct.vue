<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { computed } from 'vue'
import PrimaryLink from './PrimaryLink.vue'

const productStore = useProductStore()

const sortedProducts = computed(() => {
  return productStore.products
    .filter((p) => p.category === props.category)
    .sort((a, b) => (a.new ? -1 : 0) - (b.new ? -1 : 0))
})

const props = defineProps({
  category: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="category-products">
    <div class="category-product" v-for="product in sortedProducts" :key="product.id">
      <div>
        <img loading="lazy" :src="`/${product.image.desktop}`" alt="headphones" />
      </div>
      <div class="product-details">
        <p class="new-product" v-if="product.new">new product</p>
        <h1>{{ product.name }}</h1>
        <p class="description">{{ product.description }}</p>
        <PrimaryLink :href="`/products/${product.category}/${product.id}`" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.category-products {
  margin-top: 160px;
  max-width: 1100px;
  margin-inline: auto;
  display: grid;
  gap: 160px;

  @media (max-width: 1150px) {
    margin-top: 120px;
  }

  @media (max-width: 600px) {
    margin-top: 64px;
    padding-inline: 0.9rem;
  }
}
</style>

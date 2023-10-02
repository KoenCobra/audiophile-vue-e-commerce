<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import PrimaryLink from '@/components/PrimaryLink.vue'

const productStore = useProductStore()
const route = useRoute()
const productId = ref()

watchEffect(async () => {
  productId.value = route.params.id
  await productStore.getProduct(productId.value)
})
</script>

<template>
  <div class="product-details">
    <div class="category-product">
      <div>
        <img loading="lazy" :src="`/${productStore.product?.image.desktop}`" alt="img" />
      </div>
      <div class="product-details">
        <p class="new-product" v-if="productStore.product?.new">new product</p>
        <h1>{{ productStore.product?.name }}</h1>
        <p class="description">{{ productStore.product?.description }}</p>
        <PrimaryLink text="add to cart" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  max-width: 1100px;
  margin-inline: auto;

  @media (max-width: 1150px) {
    padding-inline: 2.5rem;
  }
  @media (max-width: 600px) {
    padding-inline: 0.9rem;
  }
}
</style>

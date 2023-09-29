<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { computed, onMounted } from 'vue'
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

onMounted(async () => {
  await productStore.getProducts()
  console.log(productStore.products)
})
</script>

<template>
  <div class="category-products">
    <div class="category-product" v-for="product in sortedProducts" :key="product.id">
      <div>
        <img :src="`${product.image.desktop}`" alt="headphones" />
      </div>
      <div class="product-details">
        <p class="new-product" v-if="product.new">new product</p>
        <h1>{{ product.name }}</h1>
        <p class="description">{{ product.description }}</p>
        <PrimaryLink href="/" />
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

  .category-product {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 128px;

    @media (max-width: 1150px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-template-columns: 1fr;
      gap: 52px;
    }

    &:nth-child(2) {
      .product-details {
        order: -1;
        @media (max-width: 1150px) {
          order: 0;
        }
      }
    }
    img {
      object-fit: cover;
      width: 560px;
      height: 540px;

      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .product-details {
      width: 445px;

      @media (max-width: 600px) {
        width: 100%;
      }

      .new-product {
        color: $orange;
        font-size: 0.8125rem;
        letter-spacing: 10px;
        text-transform: uppercase;
      }

      h1 {
        color: $black;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.429px;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }

      .description {
        color: $black;
        opacity: 0.5;
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 25px;
        margin-bottom: 3.5rem;
      }
    }
  }
}
</style>

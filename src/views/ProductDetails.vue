<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PrimaryLink from '@/components/PrimaryLink.vue'
import AddQuantity from '@/components/AddQuantity.vue'
import InTheBox from '@/components/InTheBox.vue'
import Gallery from '@/components/Gallery.vue'
import Categories from '@/components/Categories.vue'
import OtherProducts from '@/components/OtherProducts.vue'
import type { CartItem } from '@/types/product'
import { useCartStore } from '@/stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()
const productId = ref()
const router = useRouter()

watchEffect(async () => {
  productId.value = route.params.id
  await productStore.getProduct(productId.value)
})

const addToCart = () => {
  const cartItem: CartItem = {
    productID: productStore.product?.id || 0,
    productName: productStore.product?.name || '',
    price: productStore.product?.price || 0,
    productImage: productStore.product?.image.mobile || '',
    amount: cartStore.cartItemQuantity
  }
  cartStore.addToCart(cartItem)
}
</script>

<template>
  <div class="product-details">
    <button class="back-btn" @click="router.back()">Go Back</button>
    <div class="category-product">
      <div>
        <img loading="lazy" :src="`/${productStore.product?.image.desktop}`" alt="img" />
      </div>
      <div class="product-details">
        <p class="new-product" v-if="productStore.product?.new">new product</p>
        <h1>{{ productStore.product?.name }}</h1>
        <p class="description">{{ productStore.product?.description }}</p>
        <p class="price">${{ productStore.product?.price }}</p>
        <div class="add-to-cart-section">
          <AddQuantity />
          <PrimaryLink @click="addToCart" text="add to cart" />
        </div>
      </div>
    </div>
    <InTheBox />
    <Gallery />
    <OtherProducts />
    <Categories />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.product-details {
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  order: 0 !important;

  .back-btn {
    color: #000;
    font-size: 0.9325rem;
    font-weight: 500;
    opacity: 0.5;
    margin-top: 1.5rem;
  }

  h1 {
    margin-bottom: 0;
  }

  .price {
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }

  .description {
    margin-bottom: 0;
  }

  @media (max-width: 1150px) {
    padding-inline: 2.5rem;
    align-items: center;
    text-align: center;

    .back-btn {
      align-self: start;
    }
  }
  @media (max-width: 600px) {
    padding-inline: 0.9rem;
  }

  .add-to-cart-section {
    display: flex;
    gap: 1rem;
  }
}
</style>

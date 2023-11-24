<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import PrimaryLink from '@/components/PrimaryLink.vue'
import InTheBox from '@/components/InTheBox.vue'
import Gallery from '@/components/Gallery.vue'
import Categories from '@/components/Categories.vue'
import OtherProducts from '@/components/OtherProducts.vue'
import type { CartItem } from '@/types/product'
import { useCartStore } from '@/stores/cartStore'
import BackButton from '@/components/BackButton.vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const cartStore = useCartStore()
const productStore = useProductStore()
const route = useRoute()
const productId = ref()
const quantity = ref(1)

watchEffect(async () => {
  productId.value = route.params.id
  await productStore.getProduct(productId.value)
})

const addToCart = () => {
  const cartItem: CartItem = {
    productID: productStore.product?.id || 0,
    productName: productStore.product?.name || '',
    price: (productStore.product?.price || 0) * quantity.value,
    productImage: productStore.product?.image.mobile || '',
    quantity: quantity.value
  }

  cartStore.addToCart(cartItem)

  quantity.value = 1

  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: `Added (${cartItem.quantity}) ${productStore.product?.name} to cart`,
    life: 5000
  })
}

productStore.navbarClass = 'navbar-section alt-navbar'
</script>

<template>
  <div class="product-details">
    <BackButton />
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
          <div class="add-to-cart">
            <button @click="quantity > 1 ? quantity-- : quantity">-</button>
            <div class="cart-item-number">{{ quantity }}</div>
            <button @click="quantity++">+</button>
          </div>
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
  margin-top: 6.5rem;

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

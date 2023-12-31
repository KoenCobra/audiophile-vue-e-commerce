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
import { useToast, POSITION } from 'vue-toastification'

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

  toast.success(`Added (${cartItem.quantity}) ${productStore.product?.name} to cart`, {
    timeout: 3000,
    position: 'bottom-right' as POSITION
  })
}

productStore.navbarClass = 'navbar-section alt-navbar'
</script>

<template>
  <div class="category-product-details">
    <BackButton />
    <div class="category-product">
      <div class="product-img">
        <img loading="lazy" :src="`/${productStore.product?.image.desktop}`" alt="img" />
      </div>
      <div class="product-detail">
        <p class="new-product" v-if="productStore.product?.new">new product</p>
        <h1>{{ productStore.product?.name }}</h1>
        <p class="description">{{ productStore.product?.description }}</p>
        <p class="price">${{ productStore.product?.price.toLocaleString('en-US') }}</p>
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
.category-product-details {
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

    @media (min-width: 1150px) {
      margin-bottom: 2rem;
    }
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

.product-detail {
  display: grid;
  place-items: center;
  gap: 1.5rem;
  @media (max-width: 450px) {
    place-items: start;
    text-align: start;
  }
  @media (min-width: 1150px) {
    gap: 0;
    place-items: start;
    .new-product {
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 2rem;
    }
    .description {
      margin-bottom: 3.5rem;
    }
  }
}
</style>

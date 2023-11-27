<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'
import Summary from '@/components/Summary.vue'
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import PrimaryLink from '@/components/PrimaryLink.vue'
import { useCartStore } from '@/stores/cartStore'
import { useProductStore } from '@/stores/productStore'

const checkoutForm = ref()
const cartStore = useCartStore()
const productStore = useProductStore()

const submitForm = () => {
  if (!checkoutForm.value) return
  checkoutForm.value.onSubmit()
}

const resetCart = () => {
  cartStore.cart = []
  cartStore.cartTotal = 0
  cartStore.dialogVisible = false
}

productStore.navbarClass = 'navbar-section alt-navbar'
</script>

<template>
  <div class="checkout-page">
    <div class="back-btn">
      <BackButton />
    </div>
    <div class="checkout-details">
      <CheckoutForm ref="checkoutForm" />
      <Summary @submit-checkout="submitForm" />
    </div>
  </div>

  <Dialog
    v-model:visible="cartStore.dialogVisible"
    modal
    header="Header"
    :style="{ width: '33rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div>
        <img src="/images/checkout/icon-order-confirmation.svg" alt="" />
      </div>
    </template>
    <div class="header">
      <h1>
        Thank you <br />
        for your order
      </h1>
      <p>You will receive an email confirmation shortly</p>
    </div>
    <div class="summary-overview">
      <div class="summary-cart-items">
        <div v-for="item in cartStore.cart" :key="item.productID" class="summary-cart-item">
          <img :src="`/${item.productImage}`" alt="img" />
          <div class="cart-items-detail">
            <p>{{ item.productName.replace(/Headphones|Speaker|Earphones/g, '') }}</p>
            <span>$ {{ item.price }}</span>
          </div>
          <div class="cart-items-quantity">
            <p>x{{ item.quantity }}</p>
          </div>
        </div>
      </div>
      <div class="overview-total">
        <p>Grand Total</p>
        <span>$ {{ cartStore.cartTotal }}</span>
      </div>
    </div>
    <PrimaryLink @click="resetCart" text="back to home" :href="'/'" />
  </Dialog>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.checkout-page {
  padding-bottom: 4rem;
  margin-top: 6.5rem;

  @media (max-width: 1150px) {
    padding-inline: 1rem;
  }
  .back-btn {
    margin-bottom: 1rem;

    @media (max-width: 1150px) {
      margin-bottom: 0.5rem;
    }
  }

  .checkout-details {
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 2.5rem;

    @media (max-width: 1150px) {
      grid-template-columns: 1fr;
    }
  }
}

.header {
  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.143px;
    text-transform: uppercase;
    line-height: 36px;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 0.9375rem;
    opacity: 0.5;
    font-weight: 500;
  }
}

.summary-overview {
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 3rem;
  margin-top: 2rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  .summary-cart-items {
    background-color: $grey;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 2rem;

    @media (max-width: 750px) {
      border-radius: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      padding-left: 1rem;
    }
  }

  .overview-total {
    background-color: $black;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: $white;
    display: grid;
    align-content: flex-end;
    padding: 0 0 2.5rem 2rem;

    @media (max-width: 750px) {
      border-radius: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 1rem 0 1rem 1.5rem;
    }

    p {
      font-size: 0.9375rem;
      text-transform: uppercase;
      opacity: 0.5;
      font-weight: 500;
    }

    span {
      font-size: 1.125rem;
      font-weight: 700;
      margin-top: 0.3rem;
    }
  }
}

.primary-btn {
  display: block;
  text-align: center;
  width: 100% !important;
}
</style>

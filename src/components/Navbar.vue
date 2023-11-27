<template>
  <div ref="topElement" class="top-element"></div>
  <div :class="[{ isScrolling: isPageScrolling }, productStore.navbarClass]">
    <div class="navbar">
      <div class="navbar-toggle">
        <div
          @click="productStore.isMobileMenuVisible = !productStore.isMobileMenuVisible"
          class="hamburger"
        >
          <img loading="lazy" src="/images/shared/tablet/icon-hamburger.svg" alt="toggle" />
        </div>
        <RouterLink to="/">
          <img loading="lazy" src="/images/shared/desktop/logo.svg" alt="logo" />
        </RouterLink>
      </div>
      <div class="navbar-links">
        <NavLinks />
      </div>
      <div @click="cartStore.isCartVisible = !cartStore.isCartVisible" class="navbar-cart">
        <button>
          <img loading="lazy" src="/images/shared/desktop/icon-cart.svg" alt="cart" />
        </button>
        <div v-if="cartStore.cart.length" class="cart-notification">
          <p>
            {{ cartStore.cart.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="productStore.isMobileMenuVisible"
    @click="productStore.isMobileMenuVisible = false"
    class="mobile-nav-menu"
  >
    <div class="overlay"></div>
    <div class="nav-menu">
      <MobileNavMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLinks from './NavLinks.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useProductStore } from '@/stores/productStore'
import MobileNavMenu from './MobileNavMenu.vue'

const cartStore = useCartStore()
const productStore = useProductStore()
const isPageScrolling = ref(false)
const topElement = ref(null)

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries
    isPageScrolling.value = !entry.isIntersecting
  },
  {
    root: null,
    threshold: 0
  }
)

onMounted(() => {
  if (topElement.value) {
    observer.observe(topElement.value)
  }
})

onUnmounted(() => {
  if (topElement.value) {
    observer.unobserve(topElement.value)
  }
})
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.navbar-section {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  &.alt-navbar {
    background-color: black;
  }

  &.isScrolling {
    transition: all 0.1s linear;
    background-color: black;
    position: fixed;

    .navbar {
      border: 0 !important;
    }
  }

  @media (max-width: 1150px) {
    max-width: 1150px;
    padding: 2.25rem 2.5rem;
    top: 0;

    .navbar {
      border: 0 !important;
    }
  }

  .navbar {
    max-width: 1100px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;

    .navbar-toggle {
      display: flex;
      align-items: center;
      gap: 2.75rem;

      .hamburger {
        @media (min-width: 1150px) {
          display: none;
          padding-block: 2.25rem;
        }
      }
    }

    .navbar-links {
      @media (max-width: 1150px) {
        display: none;
      }
    }
  }

  .navbar-cart {
    position: relative;

    .cart-notification {
      position: absolute;
      background-color: red;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      top: -10px;
      right: -5px;
      animation: slideUp 0.2s ease-in-out;
      cursor: pointer;

      p {
        color: white;
        font-weight: 700;
        font-size: 0.75rem;
      }
    }
  }
}

.mobile-nav-menu {
  display: block;

  @media (min-width: 1150px) {
    display: none;
  }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .nav-menu {
    width: 100%;
    top: 97px;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: $white;
    position: fixed;
    height: 80vh;
    z-index: 11;
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

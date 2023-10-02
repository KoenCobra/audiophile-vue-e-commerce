<template>
  <div class="navbar-section">
    <div class="navbar" :class="{ 'home-navbar': isHomeRoute }">
      <div class="navbar-toggle">
        <div class="hamburger">
          <img loading="lazy" src="/images/shared/tablet/icon-hamburger.svg" alt="toggle" />
        </div>
        <RouterLink to="/">
          <img loading="lazy" src="/images/shared/desktop/logo.svg" alt="logo" />
        </RouterLink>
      </div>
      <div class="navbar-links">
        <NavLinks />
      </div>
      <div>
        <RouterLink to="/">
          <img loading="lazy" src="/images/shared/desktop/icon-cart.svg" alt="cart" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavLinks from './NavLinks.vue'
import { ref, watch } from 'vue'

const route = useRoute()
const isHomeRoute = ref(route.path === '/')

watch(route, (newRoute) => {
  isHomeRoute.value = newRoute.path === '/'
})
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.navbar-section {
  background-color: $black;
  position: static;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 1150px) {
    max-width: 1150px;
    padding: 2.25rem 2.5rem;
    position: sticky;
    top: 0;
    background-color: $black;
    z-index: 1;

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

    &.home-navbar {
      background-color: transparent;
      position: absolute;
      left: 0;
      right: 0;
      height: 97px;

      @media (max-width: 1150px) {
        inset: 0;
        padding-inline: 2.5rem;
        background-color: $black;
      }
    }

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
}
</style>

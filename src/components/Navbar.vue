<template>
  <div class="navbar">
    <div class="navbar-toggle">
      <div class="hamburger">
        <img src="/images/shared/tablet/icon-hamburger.svg" alt="toggle" />
      </div>
      <RouterLink to="/">
        <img src="/images/shared/desktop/logo.svg" alt="logo" />
      </RouterLink>
    </div>
    <div class="navbar-links">
      <NavLinks />
    </div>
    <div>
      <RouterLink to="/">
        <img src="/images/shared/desktop/icon-cart.svg" alt="cart" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLinks from './NavLinks.vue'
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.navbar {
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 1150px) {
    padding-block: 2.25rem;
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

  @media (max-width: 1150px) {
    padding-inline: 2.5rem;
    position: sticky;
    top: 0;
    background-color: $black;
    z-index: 1;
  }

  .navbar-links {
    @media (max-width: 1150px) {
      display: none;
    }
  }
}
</style>

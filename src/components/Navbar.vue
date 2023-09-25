<template>
  <div class="navbar">
    <div>
      <img src="/public/images/shared/desktop/logo.svg" alt="logo" />
    </div>
    <div class="navbar-links">
      <ul>
        <li><RouterLink to="/">home</RouterLink></li>
        <li><RouterLink to="/">headphones</RouterLink></li>
        <li><RouterLink to="/">speakers</RouterLink></li>
        <li><RouterLink to="/">earphones</RouterLink></li>
      </ul>
    </div>
    <div>
      <img src="/public/images/shared/desktop/icon-cart.svg" alt="cart" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';
.navbar {
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .navbar-links {
    ul {
      display: flex;
      gap: 2rem;
      padding-block: 2.25rem;
      li {
        color: $white;
        font-size: 0.8125rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
}
</style>

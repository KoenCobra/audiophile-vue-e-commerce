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
      <ul>
        <li>
          <RouterLink to="/">home</RouterLink>
        </li>
        <li>
          <RouterLink to="/headphones">headphones</RouterLink>
        </li>
        <li>
          <RouterLink to="/">speakers</RouterLink>
        </li>
        <li>
          <RouterLink to="/">earphones</RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <RouterLink to="/">
        <img src="/images/shared/desktop/icon-cart.svg" alt="cart" />
      </RouterLink>
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
  padding-block: 2.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .navbar-toggle {
    display: flex;
    align-items: center;
    gap: 2.75rem;

    .hamburger {
      @media (min-width: 1150px) {
        display: none;
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
    ul {
      display: flex;
      gap: 2rem;

      li {
        color: $white;
        font-size: 0.8125rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: $transition;

        &:hover {
          color: $orange;
        }
      }
    }

    @media (max-width: 1150px) {
      display: none;
    }
  }
}
</style>

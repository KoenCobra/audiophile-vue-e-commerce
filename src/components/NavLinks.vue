<script lang="ts" setup></script>

<template>
  <ul>
    <li>
      <RouterLink to="/">home</RouterLink>
    </li>
    <li>
      <RouterLink to="/products/headphones">headphones</RouterLink>
    </li>
    <li>
      <RouterLink to="/products/speakers">speakers</RouterLink>
    </li>
    <li>
      <RouterLink to="/products/earphones">earphones</RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

ul {
  display: flex;
  gap: 2rem;
  padding-block: 2.25rem;
  color: $white;

  @media (max-width: 520px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  li {
    a {
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: $transition;

      &:hover,
      &.router-link-active,
      &.router-link-exact-active {
        color: $orange;
      }
    }
  }
}
</style>

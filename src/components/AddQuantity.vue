<script lang="ts" setup></script>

<template>
  <div class="add-to-cart">
    <button>-</button>
    <div class="cart-item-number">1</div>
    <button>+</button>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.add-to-cart {
  background-color: $grey;
  display: flex;
  align-items: center;

  & > * {
    padding: 0.8rem 1.5rem;
  }

  button {
    font-size: 0.8125rem;
    font-weight: 700;
    transition: $transition;
    &:hover {
      color: $orange;
    }
  }
}
</style>

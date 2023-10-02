<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
</script>

<template>
  <div class="gallery">
    <img class="first" :src="`/${productStore.product?.gallery.first.desktop}`" alt="first" />
    <img class="second" :src="`/${productStore.product?.gallery.second.desktop}`" alt="second" />
    <img class="third" :src="`/${productStore.product?.gallery.third.desktop}`" alt="third" />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  gap: 1.5rem;
  grid-template-areas:
    'first second'
    'third second';
  margin-top: 120px;
  grid-template-columns: 40% 60%;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'first'
      'third'
      'second';
    margin-top: 80px;
  }
  .first {
    grid-area: first;
  }

  .second {
    grid-area: third;
  }

  .third {
    grid-area: second;
  }

  img {
    border-radius: 8px;
    width: 100%;
  }
}
</style>

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
  gap: 2rem;
  grid-template-areas:
    'first second second'
    'third second second';
  width: 100%;
  margin-top: 120px;
  grid-template-columns: 40% 60%;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'first second third';
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
    object-fit: cover;
  }
}
</style>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Categories from './Categories.vue'
import CategoryProduct from './CategoryProduct.vue'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const category = ref()

watchEffect(async () => {
  category.value = route.params.category
})
</script>

<template>
  <div class="category-hero">
    <p>{{ category }}</p>
  </div>
  <div class="products">
    <CategoryProduct :category="category" />
  </div>

  <Categories />
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.category-hero {
  height: 250px;
  background-color: $black;
  position: relative;

  @media (max-width: 1150px) {
    height: 192px;
  }
  p {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1.429px;
    text-transform: uppercase;
    color: $white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.products {
  display: flex;
  text-align: center;
  margin-bottom: 220px;
}
</style>

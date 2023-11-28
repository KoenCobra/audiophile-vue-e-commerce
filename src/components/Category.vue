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
  background-color: $black;
  position: relative;
  display: grid;
  place-items: center;
  padding-block: 4rem;

  p {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1.429px;
    text-transform: uppercase;
    color: $white;
    margin-inline: auto;
    padding-top: 5rem;
    animation: fadeIn 0.5s ease;

    @media (max-width: 1150px) {
      padding-top: 3rem;
    }
  }
}

.products {
  display: flex;
  text-align: center;
  margin-bottom: 220px;
}
</style>

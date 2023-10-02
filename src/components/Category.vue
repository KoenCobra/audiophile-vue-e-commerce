<script lang="ts" setup>
import Categories from './Categories.vue'
import CategoryProduct from './CategoryProduct.vue'

const props = defineProps({
  categoryHeader: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="category-hero">
    <p>{{ props.categoryHeader }}</p>
  </div>
  <div class="products">
    <CategoryProduct :category="category" />
  </div>

  <div class="category-products"></div>
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

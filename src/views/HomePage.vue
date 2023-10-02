<template>
  <HeroSection></HeroSection>
  <main>
    <Categories></Categories>
    <Featured></Featured>
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import Categories from '@/components/Categories.vue'
import Featured from '@/components/featured/Featured.vue'
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

onMounted(async () => {
  await productStore.getProducts()
})
</script>

<style scoped lang="scss">
main {
  max-width: 1100px;
  margin-inline: auto;

  @media (max-width: 1150px) {
    padding-inline: 2.5rem;
  }
  @media (max-width: 600px) {
    padding-inline: 0.9rem;
  }
}
</style>

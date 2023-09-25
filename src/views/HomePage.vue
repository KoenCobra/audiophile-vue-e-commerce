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
</script>

<style scoped lang="scss">
main {
  max-width: 1100px;
  margin-inline: auto;
}
</style>

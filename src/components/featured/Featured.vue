<template>
  <div class="featured" ref="featured">
    <ZX9></ZX9>
    <ZX7></ZX7>
    <YX1></YX1>
  </div>
</template>

<script setup lang="ts">
import ZX9 from './ZX9.vue'
import ZX7 from './ZX7.vue'
import YX1 from './YX1.vue'
import { onMounted, ref } from 'vue'

const featured = ref(null)

const observer = new IntersectionObserver((entries) => {
  const [entry] = entries

  if (entry.isIntersecting) {
    showCssClass.value = 'show'
  }
})

onMounted(() => {
  if (featured.value) {
    observer.observe(featured.value)
  }
})
</script>

<style scoped lang="scss">
.featured {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 150px;
}
</style>

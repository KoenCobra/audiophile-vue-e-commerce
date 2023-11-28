<template>
  <div class="featured">
    <div class="zx9">
      <ZX9></ZX9>
    </div>
    <div class="zx7">
      <ZX7></ZX7>
    </div>
    <div class="zx1">
      <YX1></YX1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ZX9 from './ZX9.vue'
import ZX7 from './ZX7.vue'
import YX1 from './YX1.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const zx9 = document.querySelector('.zx9')
  const zx7 = document.querySelector('.zx7')
  const zx1 = document.querySelector('.zx1')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.4
    }
  )

  if (zx9) observer.observe(zx9)
  if (zx7) observer.observe(zx7)
  if (zx1) observer.observe(zx1)
})
</script>

<style scoped lang="scss">
@import '@/assets/sass/variables.scss';
.featured {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 150px;

  .zx9,
  .zx1 {
    opacity: 0;
  }

  .zx7 {
    opacity: 0;
  }

  .show {
    opacity: 1;
    animation: slideInFromLeft 0.8s ease-out forwards;

    &.zx7 {
      animation-name: slideInFromRight;
    }
  }
}
</style>

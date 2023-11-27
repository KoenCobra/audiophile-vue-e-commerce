<template>
  <div class="featured">
    <div ref="zx9" class="from-left" :class="leftFadeIn">
      <ZX9></ZX9>
    </div>
    <div ref="zx7" class="from-right" :class="rightFadeIn">
      <ZX7></ZX7>
    </div>
    <div ref="zx1" class="from-left" :class="secondLeftFadeIn">
      <YX1></YX1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ZX9 from './ZX9.vue'
import ZX7 from './ZX7.vue'
import YX1 from './YX1.vue'
import { onMounted, ref } from 'vue'

const zx9 = ref(null)
const zx7 = ref(null)
const zx1 = ref(null)

const leftFadeIn = ref('')
const rightFadeIn = ref('')
const secondLeftFadeIn = ref('')

const zx9Observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      leftFadeIn.value = 'show'
    }
  },
  {
    threshold: 0.5
  }
)

const zx7Observer = new IntersectionObserver((entries) => {
  const [entry] = entries
  if (entry.isIntersecting) {
    rightFadeIn.value = 'right-show'
  }
})

const zx1Observer = new IntersectionObserver((entries) => {
  const [entry] = entries
  if (entry.isIntersecting) {
    secondLeftFadeIn.value = 'show'
  }
})

onMounted(() => {
  if (zx9.value) {
    zx9Observer.observe(zx9.value)
  }
  if (zx7.value) {
    zx7Observer.observe(zx7.value)
  }
  if (zx1.value) {
    zx1Observer.observe(zx1.value)
  }
})
</script>

<style scoped lang="scss">
.featured {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 150px;

  .from-right {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(100px);
    transition: all 0.5s ease-out;

    &.right-show {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0);
    }
  }
}
</style>

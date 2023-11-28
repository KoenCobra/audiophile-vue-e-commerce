<template>
  <div class="featured">
    <div ref="zx9">
      <ZX9></ZX9>
    </div>
    <div ref="zx7">
      <ZX7></ZX7>
    </div>
    <div ref="zx1">
      <YX1></YX1>
    </div>
  </div>
</template>

<script setup lang="ts">
import ZX9 from './ZX9.vue'
import ZX7 from './ZX7.vue'
import YX1 from './YX1.vue'
</script>

<style scoped lang="scss">
.featured {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 150px;
}
</style>

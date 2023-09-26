<template>
 <div class="featured">
  <ZX9></ZX9>
  <ZX7></ZX7>
  <YX1></YX1>
 </div>
</template>

<script setup lang="ts">
import ZX9 from './ZX9.vue';
import ZX7 from './ZX7.vue';
import YX1 from './YX1.vue';
</script>

<style scoped lang="scss">
.featured {
 display: grid;
 gap: 2.5rem;
 margin-bottom: 150px;

 @media (max-width: 1150px) {
  padding-inline: 2.5rem;
 }
}
</style>

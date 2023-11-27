<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button class="back-btn" @click="router.back()">Go Back</button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.back-btn {
  color: $black;
  font-size: 0.9325rem;
  font-weight: 500;
  opacity: 0.5;
  margin-top: 1.5rem;

  @media (max-width: 1150px) {
    margin-top: 0.5rem;
  }
}
</style>

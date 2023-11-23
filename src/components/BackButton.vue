<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button class="back-btn" @click="router.back()">Go Back</button>
</template>

<style lang="scss" scoped></style>

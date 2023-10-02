<script lang="ts" setup>
import Category from '@/components/Category.vue'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const category = ref()

watchEffect(() => {
  category.value = route.params.category
  console.log(category.value)
})
</script>

<template>
  <Category :category-header="category" :category="category"></Category>
</template>

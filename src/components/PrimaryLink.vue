<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: 'see product'
  },
  cssClass: {
    type: String,

    default: 'primary-btn'
  },
  isBlack: {
    type: Boolean,
    default: false
  },
  isBlackOnHover: {
    type: Boolean,
    default: false
  }
})

const computedClass = computed(() => {
  if (props.isBlack) return 'primary-btn-black'
  if (props.isBlackOnHover) return 'primary-btn-black-hover'
  return props.cssClass
})
</script>

<template>
  <RouterLink :to="props.href" :class="computedClass">{{ props.text }}</RouterLink>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.primary-btn {
  background-color: $orange;
  width: max-content;
  color: $white;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  transition: $transition;

  &:hover {
    background-color: $orangeHover;
  }
}

.primary-btn-black-hover {
  @extend .primary-btn;
  border: 1px solid $black;
  background-color: transparent;
  color: $black;
  &:hover {
    background-color: $blackHover;
    color: $white;
  }
}

.primary-btn-black {
  @extend .primary-btn;
  background-color: $black;

  &:hover {
    background-color: $blackHover;
  }
}
</style>

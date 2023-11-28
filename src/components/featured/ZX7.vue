<template>
  <div class="ZX7-speaker">
    <div class="ZX7-speaker-text">
      <h2>ZX7 SPEAKER</h2>
      <PrimaryLink href="/products/speakers/5" :is-black-on-hover="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLink from '../PrimaryLink.vue'
</script>

<style scoped lang="scss">
@import '../../assets/sass/variables.scss';

.ZX7-speaker {
  background: url('/images/home/desktop/image-speaker-zx7.jpg') center/cover no-repeat;
  height: 320px;
  border-radius: 8px;
  display: grid;
  justify-content: left;
  align-items: center;
  padding-left: 6rem;

  @media (max-width: 1150px) {
    background: url('/images/home/tablet/image-speaker-zx7.jpg') center/cover no-repeat;
    padding-left: 2rem;
  }

  .ZX7-speaker-text {
    gap: 1.5rem;
    display: grid;
    width: 349px;
    color: $black;

    @media (max-width: 520px) {
      width: 100%;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}
</style>

<template>
  <div class="hero-section">
    <div class="hero-text-section">
      <div class="hero-text">
        <span>new product</span>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </p>
        <PrimaryLink :href="`products/headphones/4`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryLink from './PrimaryLink.vue'
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.hero-section {
  height: 100vh;
  background: url('/images/home/desktop/image-hero.jpg') center/cover no-repeat;

  @media (max-width: 1150px) {
    height: calc(100vh - 72px);
    background: url('/images/home/tablet/image-header.jpg') center/cover no-repeat;
  }

  @media (max-width: 600px) {
    background: url('/images/home/mobile/image-header.jpg') center/cover no-repeat;
  }

  .hero-text-section {
    height: calc(100vh - 92.5px);
    max-width: 1100px;
    margin-inline: auto;
    color: $white;
    display: flex;
    align-items: center;

    @media (max-width: 1150px) {
      justify-content: center;
      text-align: center;
    }

    .hero-text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 379px;

      @media (max-width: 1150px) {
        align-items: center;
      }

      @media (max-width: 450px) {
        width: 100%;
        padding-inline: 0.5rem;
      }

      span {
        font-size: 0.875rem;
        letter-spacing: 10px;
        text-transform: uppercase;
        opacity: 0.4964;
      }

      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 58px;

        @media (max-width: 550px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 0.9375rem;
        font-weight: 500;
        opacity: 0.75;
        line-height: 25px;
      }
    }
  }
}
</style>

<template>
  <div class="about" ref="about">
    <div class="about-text from-left" :class="leftFadeIn">
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </div>
    <div class="about-img from-right" :class="rightFadeIn"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const about = ref(null)
const leftFadeIn = ref('')
const rightFadeIn = ref('')

const aboutObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      leftFadeIn.value = 'show'
      rightFadeIn.value = 'right-show'
    }
  },
  {
    threshold: 0.5
  }
)

onMounted(() => {
  if (about.value) {
    aboutObserver.observe(about.value)
  }
})
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.about {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 200px;

  @media (max-width: 1150px) {
    margin-bottom: 130px;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 455px;

    @media (max-width: 1150px) {
      width: 573px;
      order: 1;
      margin-inline: auto;
    }

    @media (max-width: 630px) {
      width: 100%;
    }

    h2 {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 1.429px;
      text-transform: uppercase;
      color: $black;

      @media (max-width: 600px) {
        width: 100%;
        font-size: 1.9rem;
      }

      span {
        color: $orange;
      }
    }

    p {
      font-size: 0.9375rem;
      font-weight: 500;
      line-height: 25px;
      color: $black;
      opacity: 0.5;
    }
  }

  .about-img {
    border-radius: 8px;
    background: url('/images/shared/desktop/image-best-gear.jpg') center/cover no-repeat;
    height: 588px;

    @media (max-width: 1150px) {
      background: url('/images/shared/tablet/image-best-gear.jpg') center/cover no-repeat;
    }

    @media (max-width: 600px) {
      background: url('/images/shared/mobile/image-best-gear.jpg') top/cover no-repeat;
    }
  }
}
</style>

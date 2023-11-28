<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import { onMounted } from 'vue'

const productStore = useProductStore()

onMounted(() => {
  const first = document.querySelector('.first')
  const second = document.querySelector('.second')
  const third = document.querySelector('.third')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.7
    }
  )

  if (first) observer.observe(first)
  if (second) observer.observe(second)
  if (third) observer.observe(third)
})
</script>

<template>
  <div class="gallery">
    <img
      loading="lazy"
      class="first"
      :src="`/${productStore.product?.gallery.first.desktop}`"
      alt="first"
    />
    <img
      loading="lazy"
      class="second"
      :src="`/${productStore.product?.gallery.second.desktop}`"
      alt="second"
    />
    <img
      loading="lazy"
      class="third"
      :src="`/${productStore.product?.gallery.third.desktop}`"
      alt="third"
    />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  gap: 1.5rem;
  grid-template-areas:
    'first second'
    'third second';
  margin-top: 120px;
  grid-template-columns: 40% 60%;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'first'
      'third'
      'second';
    margin-top: 80px;
  }
  .first {
    grid-area: first;
  }

  .second {
    grid-area: third;
  }

  .third {
    grid-area: second;
  }

  .show {
    animation: scaleImg 0.5s ease-out;
  }

  @keyframes scaleImg {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}
</style>

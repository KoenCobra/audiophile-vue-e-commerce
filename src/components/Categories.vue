<template>
  <div class="categories" ref="categories">
    <RouterLink class="from-left" :class="showCssClass" to="/products/headphones">
      <div class="category">
        <img
          loading="lazy"
          class="category-img"
          src="/images/shared/desktop/image-category-thumbnail-headphones.png"
          alt="thumb"
        />
        <div class="category-link">
          <p>headphones</p>
          <div class="category-router-link">
            <span>shop</span>
            <img loading="lazy" src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink class="from-left" :class="showCssClass" to="/products/speakers">
      <div class="category">
        <img
          loading="lazy"
          class="category-img"
          src="/images/shared/desktop/image-category-thumbnail-speakers.png"
          alt="thumb"
        />
        <div class="category-link">
          <p>speakers</p>
          <div class="category-router-link">
            <span> shop </span>
            <img loading="lazy" src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink class="from-left" :class="showCssClass" to="/products/earphones">
      <div class="category">
        <img
          loading="lazy"
          class="category-img"
          src="/images/shared/desktop/image-category-thumbnail-earphones.png"
          alt="thumb"
        />
        <div class="category-link">
          <p>earphones</p>
          <div class="category-router-link">
            <span> shop </span>
            <img loading="lazy" src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const categories = ref(null)
const showCssClass = ref('')

const observer = new IntersectionObserver((entries) => {
  const [entry] = entries

  if (entry.isIntersecting) {
    showCssClass.value = 'show'
  } else {
    showCssClass.value = ''
  }
})

onMounted(() => {
  if (categories.value) {
    observer.observe(categories.value)
  }
})
</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.categories {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 1.9rem;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 130px;
  width: 100%;

  @media (max-width: 1150px) {
    padding-inline: 2.5rem;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 223px);
  }

  @media (max-width: 850px) {
    gap: 0.65rem;
  }

  @media (max-width: 745px) {
    gap: 5.5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding-inline: 0.9rem;
  }
  .category {
    position: relative;
    border-radius: 8px;
    background-color: $grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover .category-link span {
      color: $orange;
    }

    &:hover {
      .category-img {
        transition: $transition;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 170px;
      }
    }

    .category-img {
      transition: $transition;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 160px;
    }

    .category-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 116px 106px 30px;

      @media (max-width: 850px) {
        padding-inline: 80px;
      }

      p {
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }

      span {
        font-size: 0.8125rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: $black;
        opacity: 0.5;
        transition: $transition;
      }

      img {
        width: 5px;
        height: 10px;
      }

      .category-router-link {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
}
</style>

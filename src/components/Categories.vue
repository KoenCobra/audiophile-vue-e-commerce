<template>
  <div class="categories">
    <RouterLink to="/">
      <div class="category">
        <img class="category-img" src="/images/shared/desktop/image-category-thumbnail-headphones.png" alt="thumb" />
        <div class="category-link">
          <p>headphones</p>
          <div class="category-router-link">
            <span>shop</span>
            <img src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="category">
        <img class="category-img" src="/images/shared/desktop/image-category-thumbnail-speakers.png" alt="thumb" />
        <div class="category-link">
          <p>speakers</p>
          <div class="category-router-link">
            <span> shop </span>
            <img src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="category">
        <img class="category-img" src="/images/shared/desktop/image-category-thumbnail-earphones.png" alt="thumb" />
        <div class="category-link">
          <p>earphones</p>
          <div class="category-router-link">
            <span> shop </span>
            <img src="/images/shared/desktop/icon-arrow-right.svg" alt="thumb" />
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.9rem;
  margin-top: 200px;
  margin-bottom: 168px;

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

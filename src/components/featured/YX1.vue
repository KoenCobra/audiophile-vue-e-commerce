<template>
 <div class="YX1-earphones">
  <div class="product">
  </div>
  <div class="text">
   <h2>YX1
    SPEAKER</h2>
   <RouterLink to="/">see product</RouterLink>
  </div>
 </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../../assets/sass/variables.scss';

.YX1-earphones {
 display: grid;
 gap: 2.5rem;
 grid-template-columns: repeat(2, 1fr);
 height: 320px;

 @media (max-width: 1150px) {
  gap: 1rem;
 }

 @media (max-width: 600px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 200px);
  height: 320px;
 }

 .product {
  background: url('/images/home/desktop/image-earphones-yx1.jpg') center/cover no-repeat;
  border-radius: 8px;

  @media (max-width: 1150px) {
   background: url('/images/home/tablet/image-earphones-yx1.jpg') center/cover no-repeat;
  }

  @media (max-width: 600px) {
   background: url('/images/home/mobile/image-earphones-yx1.jpg') center/cover no-repeat;
  }
 }

 .text {
  border-radius: 8px;
  background-color: $grey;
  padding: 101px 200px 101px 90px;

  @media (max-width: 1150px) {
   padding: 81px 20px 41px 30px;
  }

  @media (max-width: 600px) {
   padding: 41px 20px 41px 24px;
  }

  h2 {
   font-size: 1.75rem;
   font-weight: 700;
   line-height: 58px;
   letter-spacing: 2px;
   text-transform: uppercase;
   margin-bottom: 2rem;
  }

  a {
   border: 1px solid $black;
   width: max-content;
   font-size: 0.8125rem;
   padding: 1rem 2rem;
   font-weight: 700;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: $transition;

   &:hover {
    background-color: $blackHover;
    color: $white;
   }
  }
 }
}
</style>
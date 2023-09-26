<template>
 <div class="about">

  <div class="about-text">
   <h2>
    Bringing you the <span>best</span> audio gear
   </h2>
   <p>
    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,
    and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and
    experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile
    the best place to buy your portable audio equipment.
   </p>
  </div>
  <div class="about-img"></div>
 </div>
</template>

<script setup lang="ts">

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
  padding-inline: 2.5rem;
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

  h2 {
   font-size: 2.5rem;
   font-style: normal;
   font-weight: 700;
   line-height: 44px;
   letter-spacing: 1.429px;
   text-transform: uppercase;
   color: $black;

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
  background: url('/images/shared/desktop/image-best-gear.jpg') center/cover;
  height: 588px;

  @media (max-width: 1150px) {
   background: url('/images/shared/tablet/image-best-gear.jpg') center/cover;
  }

  @media (max-width: 600px) {
   background: url('/images/shared/mobile/image-best-gear.jpg') center/cover;
  }
 }
}
</style>
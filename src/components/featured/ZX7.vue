<template>
 <div class="ZX7-speaker">
  <div class="ZX7-speaker-text">
   <h2>ZX7
    SPEAKER</h2>
   <RouterLink to="/">see product</RouterLink>
  </div>
 </div>
</template>

<script setup lang="ts">

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

 .ZX7-speaker-text {
  gap: 1.5rem;
  display: grid;
  width: 349px;
  color: $black;

  h2 {
   font-size: 1.75rem;
   font-weight: 700;
   line-height: 58px;
   letter-spacing: 2px;
   text-transform: uppercase;
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
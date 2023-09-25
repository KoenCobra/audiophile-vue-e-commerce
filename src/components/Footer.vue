<template>
 <div class="footer">
  <div class="footer-links">
   <div>
    <RouterLink to="/">
     <img src="/images/shared/desktop/logo.svg" alt="logo" />
    </RouterLink>
   </div>
   <ul>
    <li>
     <RouterLink to="/">home</RouterLink>
    </li>
    <li>
     <RouterLink to="/">headphones</RouterLink>
    </li>
    <li>
     <RouterLink to="/">speakers</RouterLink>
    </li>
    <li>
     <RouterLink to="/">earphones</RouterLink>
    </li>
   </ul>
  </div>
  <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
   specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility -
   we’re open 7 days a week.</p>
  <div class="copy">
   Copyright 2021. All Rights Reserved

  </div>
 </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '../assets/sass/variables.scss';

.footer {
 background-color: $black;

 .footerlinks {
  ul {
   display: flex;
   gap: 2rem;
   padding-block: 2.25rem;

   li {
    color: $white;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: $transition;

    &:hover {
     color: $orange;
    }
   }
  }
 }
}
</style>
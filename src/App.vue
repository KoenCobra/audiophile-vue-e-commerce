<template>
  <Navbar />
  <RouterView />
  <div class="about">
    <About />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import About from '@/components/About.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped lang="scss">
@import './assets/sass/variables.scss';

.about {
  max-width: 1100px;
  margin-inline: auto;
  margin-top: 150px;

  @media (max-width: 1150px) {
    padding-inline: 1.25rem;
  }

  @media (max-width: 600px) {
    padding-inline: 0.45rem;
  }
}
</style>

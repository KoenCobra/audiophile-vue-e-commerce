<template>
  <div class="ZX9-speaker">
    <div class="ZX9-speaker-text">
      <h2>ZX9 SPEAKER</h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>
      <RouterLink to="/">see product</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../../assets/sass/variables.scss';

.ZX9-speaker {
  background: url('/images/home/desktop/image-speaker-zx9.png'),
    url('/images/home/desktop/pattern-circles.svg');
  background-repeat: no-repeat;
  background-position:
    left 20% bottom -7%,
    left -38% bottom 100%;
  background-size: 32%, 75%;
  height: 560px;
  border-radius: 8px;
  background-color: $orange;
  text-align: left;
  display: grid;
  justify-content: right;
  align-items: center;
  padding-right: 6rem;

  @media (max-width: 950px) {
    background: url('/images/home/tablet/image-speaker-zx9.png'),
      url('/images/home/desktop/pattern-circles.svg');
    background-repeat: no-repeat;
    background-position:
      center top 15%,
      center top -30%;
    background-size: 28%, 100%;
    height: 720px;
    background-color: $orange;
    display: grid;
    justify-content: center;
    align-items: end;
    padding: 0 0 4rem;
  }

  .ZX9-speaker-text {
    gap: 1.5rem;
    display: grid;
    width: 349px;
    color: $white;

    @media (max-width: 1000px) {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 520px) {
      padding-inline: 0.5rem;
      width: 100%;
    }

    h2 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    p {
      font-size: 0.9375rem;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.75;
    }

    a {
      background-color: $black;
      width: max-content;
      font-size: 0.8125rem;
      padding: 1rem 2rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: $transition;

      &:hover {
        background-color: $blackHover;
      }
    }
  }
}
</style>

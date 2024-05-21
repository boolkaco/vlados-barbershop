<template>
  <div class="home_view">
    <HeaderView />
    <div class="hone_view__wrp">
      <img v-bind:src="logo" alt="">
      <p>vlado's</p>
      <p>barbershop</p>
      <p>Professional barber services in Prague</p>
      <Button />
      <img v-bind:src="overview" alt="">
      <div class="home_view__about-us">
        <p class="home__view_aout-us_main">About Us</p>
        <div class="home_view__about-us_text">
          <span class="home_view__about-us_text-item">Hey there! I'm Vlad, and welcome to Vlado's Barbershop! 
            We've created this space with over ten years of experience in the barber industry. We truly believe  that a fantastic haircut goes hand in hand with top-tier service
          </span>
          <span class="home_view__about-us_text-item">
            Our crew blends classic techniques with the latest trends to ensure your cut or shave isn't just on point but also timeless. It's not just about looking good here; it's about the entire experience. Get ready for personalized advice to choose the perfect haircut, grooming tips, and a range of extra services to make your visit truly special.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
import HeaderView from './HeaderView.vue';
import logo from '../assets/Logo.svg';
import overview from '../assets/barber-img.png';

</script>

<style scoped lang="scss">  
@import '../scss/variables.scss';

.home_view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hone_view__wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10.9rem;
}


.home_view__about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

.home__view_aout-us_main {
  font-size: 4.2rem;
  text-transform: uppercase;
  margin-bottom: 3.2rem;
}

.home_view__about-us_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;
}

.home_view__about-us_text-item {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
   
}


</style>
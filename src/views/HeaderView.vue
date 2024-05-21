<template>
  <div class="home_vue">
    <div class="home_vue__logo">
      <img class="home_vue__logo-image" v-bind:src="Logo" alt="">
      <p class="home_vue__logo-text_main">vlado's</p> 
      <p class="home_vue__logo-text">barbershop</p>
    </div>
    <div class="home_vue__link">
      <div class="home_vue__link-item">about us</div>
      <div class="home_vue__link-item">servises and prises</div>
      <div class="home_vue__link-item">our team</div>
      <div class="home_vue__link-item">contacts</div>
    </div>
    <div class="home_vue__social">
      <select class="home_vue__social-select">
        <option>cz</option>
        <option>en</option>
        <option>ua</option>
        <option>ru</option>
      </select>
      <div class="home_vue__social-item">
        <img class="home_vue__social-img" v-bind:src="facebook" alt=""/>
        <img class="home_vue__social-img" v-bind:src="whatsapp" alt=""/>
        <img class="home_vue__social-img" v-bind:src="instagram" alt=""/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-icon.svg'
import instagram from '@/assets/icons/instagram-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-icon.svg'
import Logo from '@/assets/Logo.svg'
  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.home_vue {
  width: 140rem;
  max-height: 8.9rem;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: fixed;
  background-color: $color-white;
}



.home_vue__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home_vue__logo-image {
  width: 5.2rem;
  height: 4.8rem;
}

.home_vue__logo-text_main {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
}

.home_vue__logo-text {
  font-size: 0.6rem;
  font-weight: 300;
}



.home_vue__link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.home_vue__link-item {
  margin: 0 3.5rem;
  padding: 0.1rem 0.5rem;
  text-transform: uppercase;
  font-size: 1.7rem;
   
    &:hover {
      color: $link-hover-color;
      cursor: pointer;
    }
}



.home_vue__social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
}

.home_vue__social-select {
  border: none;
  text-transform: uppercase;
  font-size: 1.7rem;
  
}

option {
  border: none;
}

.home_vue__social-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
}

</style>
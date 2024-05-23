<template>
  <div class="header_view">
    <div class="header_view__logo">
      <img class="header_view__logo-image" v-bind:src="Logo" alt="">
      <p class="header_view__logo-text_main">vlado's</p> 
      <p class="header_view__logo-text">barbershop</p>
    </div>
    <div class="header_view__link">
      <div class="header_view__link-item">about us</div>
      <div class="header_view__link-item">servises and prises</div>
      <div class="header_view__link-item">our team</div>
      <div class="header_view__link-item">contacts</div>
    </div>
    <div class="header_view__social">
      <select class="header_view__social-select">
        <option>cz</option>
        <option>en</option>
        <option>ua</option>
        <option>ru</option>
      </select>
      <div class="header_view__social-item">
        <img class="header_view__social-img" v-bind:src="facebook" alt=""/>
        <img class="header_view__social-img" v-bind:src="whatsapp" alt=""/>
        <img class="header_view__social-img" v-bind:src="instagram" alt=""/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import Logo from '@/assets/logo.svg'
  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.header_view {
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



.header_view__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header_view__logo-image {
  width: 5.2rem;
  height: 4.8rem;
}

.header_view__logo-text_main {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
}

.header_view__logo-text {
  font-size: 0.6rem;
  font-weight: 300;
}



.header_view__link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header_view__link-item {
  margin: 0 3.5rem;
  padding: 0.1rem 0.5rem;
  text-transform: uppercase;
  font-size: 1.7rem;
   
    &:hover {
      color: $link-hover-color;
      cursor: pointer;
    }
}



.header_view__social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
}

.header_view__social-select {
  border: none;
  text-transform: uppercase;
  font-size: 1.7rem;
  
}

.header_view__social-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
}

.header_view__social-img {
  transition: all 100ms;
  filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
      transition: all 100ms;
    }

}

option {
  border: none;
}


</style>
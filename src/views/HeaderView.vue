<template>
  <div class="header_view">
    <div class="header_view-wrp">
      <div @click="scrollToTop" class="header_view__logo" type="Button">
        <img class="header_view__logo-image" v-bind:src="Logo" alt="">
        <img class="header_view__logo-title" v-bind:src="logoTitle" alt="">
      </div>
      <Navigation class="header_view__link"/>
      <div class="header_view__social">
        <langSwitcher />
        <Social />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import langSwitcher from '@/components/LangSwitcher.vue'
import Navigation from '@/components/Navigation.vue'
import Logo from '@/assets/logo.svg'
import logoTitle from '@/assets/icons/vlados-title-icon.svg'
import Social from '@/components/Social.vue'

function scrollToTop () {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

@media screen and (min-width: 1025px) {


 .header_view {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .header_view-wrp {
    width: 100%;
    height: 89px;
    padding: 0 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    position: fixed;
    z-index: 20;
    background-color: $color-white;
  }

  .header_view__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .header_view__logo-image {
    width: 52px;
    height: 48px;
  }

  .header_view__link {
    max-width: 504px;
    margin: 0 0 0 145.5px;
    font-size: 14px;
  }


  .header_view__social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 21px 0 0;
  }
 

  

}



</style>
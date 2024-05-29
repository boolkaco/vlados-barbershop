<template>
  <div class="header_view">
    <div class="header_view-wrp">
      <div @click="scrollToTop" class="header_view__logo" type="Button">
        <img class="header_view__logo-image" v-bind:src="Logo" alt="">
        <img class="header_view__logo-title" v-bind:src="logoTitle" alt="">
      </div>
      <div class="header_view__link">
        <div @click="scrollToAboutUs" class="header_view__link-item">{{ $t('navigation.about') }}</div>
        <div @click="scrollToServises" class="header_view__link-item">{{ $t('navigation.services') }}</div>
        <div @click="scrollToTeam" class="header_view__link-item">{{ $t('navigation.team') }}</div>
        <div @click="scrollToContacts" class="header_view__link-item">{{ $t('navigation.contacts') }}</div>
      </div>
      <div class="header_view__social">
        <select class="header_view__social-select">
          <option value="en">en</option>
          <option value="cz">cz</option>
          <option value="ua">ua</option>
          <option value="ru">ru</option>
        </select>
        <div class="header_view__social-item">
          <img class="header_view__social-img" @click="redirectToFacebook" v-bind:src="facebook" />
          <img class="header_view__social-img" @click="redirectToWhatsapp" v-bind:src="whatsapp" />
          <img class="header_view__social-img" @click="redirectToInstagram" v-bind:src="instagram" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import Logo from '@/assets/logo.svg'
import logoTitle from '@/assets/icons/vlados-title-icon.svg'
// import { ref } from 'vue';
// import { useI18n } from 'vue-i18n'

// const { locale } = useI18n();
// const selectedLanguage = ref(locale.value);

// function changeLanguage() {
//   locale.value = selectedLanguage.value;
// }
    
  


function redirectToFacebook() {
  window.open('https://www.facebook.com/profile.php?id=61558335386973', '_blank', 'noopener,noreferrer');
}

function redirectToWhatsapp() {
  window.open('#', '_blank', 'noopener,noreferrer');
}

function redirectToInstagram() {
  window.open('https://www.instagram.com/vlados_barbershop?igsh=MXRkdjkzcjExbWJ4Mw==', '_blank', 'noopener,noreferrer');
}




const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const scrollToAboutUs = (): void => {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
};
const scrollToServises = (): void => {
  window.scrollTo({
    top: 1640,
    behavior: 'smooth',
  });
};
const scrollToTeam = (): void => {
  window.scrollTo({
    top: 2540,
    behavior: 'smooth',
  });
};
const scrollToContacts = (): void => {
  window.scrollTo({
    top: 4000,
    behavior: 'smooth',
  });
};
  
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 504px;
    margin: 0 0 0 145.5px
  }

  .header_view__link-item {
    margin: 0 15px;
    padding: 1px 5x;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    
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
    margin: 0 21px 0 0;
  }

  .header_view__social-select {
    border: none;
    text-transform: uppercase;
    font-size: 17px;
    margin: 0 53px 0 0;
  }

  .header_view__social-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header_view__social-img {
    margin: 0 16px 0 0;
    transition: all 300ms;
    filter: grayscale(100%);
      &:hover {
        filter: grayscale(0%);
      }
      &:active {
        filter: grayscale(100%);
      }

  }

  option {
    border: none;
  }
}


</style>
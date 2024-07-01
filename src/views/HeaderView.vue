<template>
  <div class="header_view">
    <div class="header_view-wrp">
      <div class="header_view__logo">
        <img class="header_view__logo-image--desktop" v-bind:src="LogoWithText" alt="">
        <img class="header_view__logo-image--mobile" v-bind:src="Logo" alt="">
      </div>
      <img class="header_view__text-logo--mobile" :src="TextLogo" alt="">
      <Navigation class="header_view__link"/>
      <div class="header_view__social">
        <langSwitcher />
        <Social />
      </div>
      <div class="header_view__menu-icon-wrp" @click="toggleMenu">
        <img v-bind:src="MenuIcon" alt="menu" class="header_view__menu-icon">
      </div>
    </div>
    <MenuComponent v-if="isMenuVisible" @close="toggleMenu" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import langSwitcher from '@/components/langSwitcher.vue';
import Navigation from '@/components/Navigation.vue';
import LogoWithText from '@/assets/logo_with_text.svg';
import Logo from '@/assets/logo.svg';
import TextLogo from '@/assets/logoTitleBlack.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import Social from '@/components/Social.vue';
import MenuComponent from '@/components/MenuComponent.vue';

const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}

watch(isMenuVisible, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

@media (max-width: $medium-screen) {
  .header_view__link {
    display: none;
  }
}

.header_view__menu-icon-wrp {
  width: 40px;
  display: none;

  @media (max-width: $medium-screen) {
    display: flex;
    justify-content: flex-end;
  }

  .header_view__menu-icon {
    cursor: pointer;
  }
}

.header_view {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.header_view-wrp {
  z-index: 100;
  width: 100%;
  height: 89px;
  padding: 0 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: fixed;
  z-index: 2;
  background-color: $color-white;

  @media (max-width: $medium-screen) {
    height: 65px;
    padding: 12px 15px 0 15px;
  }
}

.header_view__text-logo--mobile {
  display: none;
  width: 94px;
  margin-top: 6px;

  @media (max-width: $medium-screen) {
    display: block;
  }
}

.header_view__logo {
  display: flex;
  flex-direction: column;
  align-items: center;

  .header_view__logo-image--desktop {
    width: 97px;
    height: 70px;

    @media (max-width: $medium-screen) {
      display: none;
    }
  }

  .header_view__logo-image--mobile {
    display: none;
    width: 40px;

    @media (max-width: $medium-screen) {
      display: block;
    }
  }
}

.header_view__social {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 21px 0 0;

  @media (max-width: $medium-screen) {
    display: none;
  }
}
</style>

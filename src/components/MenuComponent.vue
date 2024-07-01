<template>
  <JsonLoader v-slot="{data}">
    <div v-if="data" class="menu_component">
      <div class="menu_component__content">
        <div class="menu_component__header">
          <img class="menu_component__header-logo" :src="logo" alt="">
          <img class="menu_component__header-text" :src="textLogo" alt="">
          <img class="menu_component__header-close" :src="closeIcon" alt="" @click="closeMenu">
        </div>

        <div class="menu_component__wrapper">
          <Navigation :isVertical="true" fontSize="18px" linkColor="#FFF" @closeMenu="closeMenu" />
        </div>

        <div class="menu_component__footer">
          <div class="menu_component__number">
            {{ data.phone }}
          </div>

          <div class="menu_component__social">
            <Social :data="data"/>
          </div>

          <div class="menu_component__lang-switcher">
            <langSwitcher :isSingleLineView="true"/>
          </div>
        </div>
      </div>
    </div>
  </JsonLoader>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['close']);
import JsonLoader from '@/components/JsonLoader.vue';
import logo from '@/assets/logo.svg';
import textLogo from '@/assets/logoTitleWhite.svg';
import closeIcon from '@/assets/icons/close.svg';
import Social from '@/components/Social.vue';
import LangSwitcher from "@/components/langSwitcher.vue";
import Navigation from "@/components/Navigation.vue";

function closeMenu() {
  emit('close');
}
</script>


<style scoped lang="scss">
.menu_component__header {
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 12px 15px 0 15px;
  width: 100%;

  &-logo {
    width: 40px;
  }

  &-text {
    width: 94px;
    padding-top: 6px;
  }

  &-close {
    margin-left: 6px;
    width: 18px;
    cursor: pointer;
  }
}

.menu_component {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 100000;
}

.menu_component__content {
  background: #323232;
  width: 100%;
  height: 100%;
  padding-bottom: 42px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu_component__wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu_component__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu_component__number {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 24.2px;
  letter-spacing: -0.08em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 38px;
}

.menu_component__lang-switcher {
  margin-top: 50px;
}

.menu_component__menu-list {
  & > li {
    list-style: none;
    margin-bottom: 20px;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: -0.08em;
    text-align: center;
    color: #ffffff;
  }
}
</style>

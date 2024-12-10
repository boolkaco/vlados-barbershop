<template>
  <div :class="{'navigation__link': true, 'vertical-layout': isVertical}">
    <div @click="handleClick(constants.anchors.ABOUT_US)" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.about') }}</div>
    <div @click="handleClick(constants.anchors.PRICE)" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.services-header') }}</div>
    <div @click="handleClick(constants.anchors.OUR_TEAM)" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.team') }}</div>
    <div @click="handleClick(constants.anchors.CONTACTS)" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.contacts') }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import {constants} from "../../const";

const props = defineProps({
  isVertical: {
    type: Boolean,
    default: false,
  },
  linkColor: {
    type: String,
    default: '#000',
  },
  fontSize: {
    type: String,
    default: '14px',
  },
});

const emit = defineEmits(['closeMenu']);

const root = document.documentElement;
root.style.setProperty('--link-color', props.linkColor);
root.style.setProperty('--font-size', props.fontSize);


const router = useRouter();

const handleClick = (id: string) => {
  const element = document.getElementById(id);
  const offset = window.innerWidth > 600 && id === constants.anchors.ABOUT_US ? 100 : 50;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    router.push({ hash: `#${id}` });

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    emit('closeMenu');
  } else {
    console.error('Invalid section');
  }
};
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.navigation__link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 504px;
  margin: 0 0 0 145.5px;
  font-size: var(--font-size) !important;
  color: var(--link-color) !important;

  &.vertical-layout {
    flex-direction: column;
    width: auto;
    margin: 0;
  }
}

.navigation__link-item {
  margin: 0 7.5px;
  text-transform: uppercase;
  &:hover {
    color: $link-hover-color;
    cursor: pointer;
  }

  &.vertical-item {
    margin: 5px 0 15px;
  }
}
</style>


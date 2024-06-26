<template>
  <div :class="{'navigation__link': true, 'vertical-layout': isVertical}">
    <div @click="handleClick('scrollToAboutUs')" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.about') }}</div>
    <div @click="handleClick('scrollToServises')" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.services-header') }}</div>
    <div @click="handleClick('scrollToTeam')" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.team') }}</div>
    <div @click="handleClick('scrollToContacts')" :class="['navigation__link-item', { 'vertical-item': isVertical }]">{{ $t('navigation.contacts') }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

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

const scrollPositions: Record<string, { top: number, behavior: ScrollBehavior }> = {
  scrollToAboutUs: { top: 1000, behavior: 'smooth' },
  scrollToServises: { top: 1640, behavior: 'smooth' },
  scrollToTeam: { top: 2540, behavior: 'smooth' },
  scrollToContacts: { top: 4000, behavior: 'smooth' },
};

function scrollToSection(section: keyof typeof scrollPositions) {
  const position = scrollPositions[section];
  if (position) {
    window.scrollTo(position);
  } else {
    console.error('Invalid section');
  }
}

const handleClick = (section: keyof typeof scrollPositions) => {
  scrollToSection(section);
  emit('closeMenu');
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


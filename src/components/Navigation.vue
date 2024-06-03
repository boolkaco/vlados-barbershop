<template>
  <div class="navigation__link">
    <div @click="scrollTo('scrollToAboutUs')" class="navigation__link-item">{{ $t('navigation.about') }}</div>
    <div @click="scrollTo('scrollToServises')" class="navigation__link-item">{{ $t('navigation.services-header') }}</div>
    <div @click="scrollTo('scrollToTeam')" class="navigation__link-item">{{ $t('navigation.team') }}</div>
    <div @click="scrollTo('scrollToContacts')" class="navigation__link-item">{{ $t('navigation.contacts') }}</div>
  </div>
</template>

<script setup lang="ts">

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

const scrollTo = (section: keyof typeof scrollPositions) => {
  scrollToSection(section);
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
  }

  .navigation__link-item {
    margin: 0 10px;
    text-transform: uppercase;    
      &:hover {
        color: $link-hover-color;
        cursor: pointer;
      }
  }

</style>

<template>
  <div v-if="!isSingleLineView" class="language-switcher" @mouseover="openDropdown" @mouseleave="closeDropdown">
    <div class="selected-language">{{ currentLanguage.label }}</div>
    <div v-if="dropdownOpen" class="dropdown-menu">
      <div
          v-for="language in availableLanguages"
          :key="language.code"
          class="dropdown-item"
          @click="changeLanguage(language)"
      >
        {{ language.label }}
      </div>
    </div>
  </div>
  <div v-else class="single-line-view">
    <span
        v-for="language in languages"
        :key="language.code"
        :class="{'active-language': language.code === currentLanguage.code}"
        @click="changeLanguage(language)"
    >
      {{ language.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import {useRoute, useRouter} from "vue-router";

const props = defineProps({
  isSingleLineView: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'cz', label: 'CZ' },
  { code: 'ru', label: 'RU' },
  { code: 'ua', label: 'UA' },
];

const currentLanguage = ref(languages.find(lang => lang.code === locale.value) || languages[0]);
const dropdownOpen = ref(false);

const availableLanguages = computed(() => {
  return languages.filter(language => language.code !== currentLanguage.value.code);
});

function openDropdown() {
  dropdownOpen.value = true;
}

function closeDropdown() {
  dropdownOpen.value = false;
}

function changeLanguage(language: { code: string; label: string }) {
  currentLanguage.value = language;
  locale.value = language.code;

  router.push({
    path: `/${language.code}${route.fullPath.replace(/^\/(en|cz|ru|ua)/, '') || '/'}`,
  });

  dropdownOpen.value = false;
}
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.language-switcher {
  position: relative;
  width: 39px;
  margin: 0 53px 0 0;
  cursor: pointer;
  &::before {
    content: "";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 8px 6px 0 6px;
    border-color: $color-gray-1 transparent transparent transparent;
    cursor: pointer;
    pointer-events: none;
    position: absolute;
    transform: translateY(-50%);
    top: 49%;
    left: 33px;
    display: block;
  }
}

.selected-language {
  padding: 10px;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  background-color: #fff;
  top: 100%;
  left: 10px;
  width: 47px;
  height: 85px;
  border: none;
  box-shadow: 0 1px 8px 3px rgba(0, 0, 0, 0.1);
  &::before {
    content: "";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 6.5px 9px 6.5px;
    border-color: transparent transparent white transparent;
    transform: rotate(0deg);
    cursor: pointer;
    pointer-events: none;
    position: absolute;
    transform: translateY(-50%);
    bottom: 78px;
    left: 23px;
    display: block;
  }
}

.dropdown-item {
  text-align: center;
  margin: 4px;
  background-color: white;
  cursor: pointer;
  color: rgba(123, 123, 123, 1);
  &:hover {
    color: black;
    background-color: #fff;
  }
}

.single-line-view {
  display: flex;
  align-items: center;
  gap: 10px;
}

.single-line-view span {
  cursor: pointer;
  color: rgba(123, 123, 123, 1);
  font-size: 18px;
}

.single-line-view .active-language {
  color: white;
}
</style>

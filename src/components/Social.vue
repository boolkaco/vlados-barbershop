<template>
  <div
      v-if="data"
      class="social-item"
  >
    <a
        :href="data.facebook"
        target="_blank"
        rel="noopener noreferrer"
    >
      <img
          class="social-img--desktop"
          :src="facebook"
      />
      <img
          class="social-img--mobile"
          :src="facebookWhite"
      />
    </a>
    <a
        :href="data.whatsapp"
        target="_blank"
        rel="noopener noreferrer"
    >
      <img
          class="social-img--desktop"
          :src="whatsapp"
      />
      <img
          class="social-img--mobile"
          :src="whatsappWhite"
      />
    </a>
    <a
        :href="data.instagram"
        target="_blank"
        rel="noopener noreferrer"
    >
      <img
          class="social-img--desktop"
          :src="instagram"
      />
      <img
          class="social-img--mobile"
          :src="instagramWhite"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import facebookWhite from '@/assets/icons/facebook-icon.svg'
import instagramWhite from '@/assets/icons/instagram-icon.svg'
import whatsappWhite from '@/assets/icons/whatsapp-icon.svg'
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.social-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.social-img--desktop {
  margin: 0 8px;
  transition: all 0.4s;
  filter: grayscale(100%);

  @media (max-width: $medium-screen) {
    display: none;
  }

  &:hover {
    filter: grayscale(0%);
  }

  &:active {
    filter: grayscale(100%);
  }
}

.social-img--mobile {
  margin: 0 8px;
  transition: all 0.4s;
  display: none;

  @media (max-width: $medium-screen) {
    display: block;
  }
}
</style>

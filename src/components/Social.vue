<template>
  <JsonLoader v-slot="{data}">
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
            class="social-img"
            :src="facebook"
        />
      </a>
      <a
          :href="data.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
      >
        <img
            class="social-img"
            :src="whatsapp"
        />
      </a>
      <a
          :href="data.instagram"
          target="_blank"
          rel="noopener noreferrer"
      >
        <img
            class="social-img"
            :src="instagram"
        />
      </a>
    </div>
  </JsonLoader>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import JsonLoader from '@/components/JsonLoader.vue';

</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.social-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.social-img {
  margin: 0 8px;
  transition: all 0.4s;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  &:active {
    filter: grayscale(100%);
  }
}
</style>

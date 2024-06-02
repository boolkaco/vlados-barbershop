<template>
  <div class="header_view__social-item" >
    <a
      :href="urls.redirectToFacebook"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img
        class="header_view__social-img" 
        :src="facebook"  
      />
    </a>
    <a
      :href=urls.redirectToWhatsapp  
      target="_blank" 
      rel="noopener noreferrer" 
    >
      <img 
        class="header_view__social-img" 
        :src="whatsapp" 
      />
    </a>
    <a 
      :href=urls.redirectToInstagram  
      target="_blank" 
      rel="noopener noreferrer"
      >
      <img
        class="header_view__social-img"
        :src="instagram"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'

const urls: Record<string, string> = {
  redirectToFacebook: 'https://www.facebook.com/profile.php?id=61558335386973',
  redirectToWhatsapp: '#',
  redirectToInstagram: 'https://www.instagram.com/vlados_barbershop?igsh=MXRkdjkzcjExbWJ4Mw==',
};


  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

  .header_view__social-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header_view__social-img {
    margin: 0 16px 0 0;
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

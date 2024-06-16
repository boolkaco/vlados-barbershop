<template>
  <div class="loader-container" v-if="isLoading">
    <img class="loader__img" :src="Logo">
    <div class="loader-progress-container">
      <div class="loader-progress" ref="loaderProgress" :style="{ width: progress + '%' }"></div>
    </div>
    <span class="loader-progress-text">{{ progress }}%</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted  } from 'vue';
import Logo from '@/assets/logo_with_text.svg';
const isLoading = ref(true);
const progress = ref(0);

onMounted(async () => {
    document.body.style.overflow = 'hidden';

    let width = 0;
    const interval = setInterval(() => {
      if (width < 100) {
        width++;
        progress.value = width;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          isLoading.value = false;
          document.body.style.overflow = '';
        }, 500); 
      }
    }, 15); 
  });
  onUnmounted(() => {
  document.body.style.overflow = '';
});
  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

body {
  padding-right: 0px;
}


.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader__img {
  width: 124px;
  height: 91px;
}

.loader-progress-container {
  width: 152px;
  height: 7px;
  background-color: #AAAAAA;
  border-radius: 5px;
  margin: 16.6px 0 11px 0;
}

.loader-progress {
  border-radius: 5px;
  height: 100%;
  background-color: #F77962;
  transition: width 0.01s ease;
}

.loader-progress-text {
  font-size: 14px;
  font-weight: 500;
}
</style>
<template>
  <div>
    <Loader />
    <RouterView />
  </div>
</template>


<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Loader from '@/components/loader.vue'
</script>

<style scoped lang="scss">


</style>

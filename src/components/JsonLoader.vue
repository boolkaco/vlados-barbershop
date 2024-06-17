<template>
  <div>
    <slot :data="data"/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const data = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('/data.json');
    if (response.ok) {
      data.value = await response.json();
    } else {
      console.error('Failed to fetch data.json');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

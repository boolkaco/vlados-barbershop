<template>
  <div>
    <div class="btn">
      Book Online
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.btn {
  background-color: $button-hover-color;
  border-radius: 3.1rem;
  border: 0.1rem solid  $button-hover-color;
  color: $button-bg-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  height: 3.9rem;
  width: 12.3rem;
  padding:  0;
  text-align: center;
  text-decoration: none;
  transition: all 300ms ;


  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: $button-text-color;
    background-color: $button-bg-color;
    border: 0.1rem solid $button-border-color;
    transform: translateY(-0px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}


</style>

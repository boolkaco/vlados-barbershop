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
@import '../scss/variables.scss';

.btn {
  background-color: $button-bg-color;
  border: 0.1rem solid $button-border-color;
  border-radius: 3.1rem;
  color: $button-text-color;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  margin-top: 4rem;
  height: 4.9rem;
  width: 13.5rem;
  padding: 0.6rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  width: 100%;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: $color-orange;
    border: $color-orange;
    transform: translateY(-0px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}


</style>

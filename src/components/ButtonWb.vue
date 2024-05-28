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
	background-color: $color-white;
  border: 1px solid $color-gray-1;
  border-radius: 31px;
  color: $color-black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  height: 49px;
  min-width: 133px;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  width: 100%;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: $color-white;
    background-color: $color-orange;
    border: 1px solid $color-orange;
    // transform: translateY(-0px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}

</style>

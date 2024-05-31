<template>
  <div>
    <div class="btn">
      {{ $t('buttonTitle') }}
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.btn {
  background-image: none; 
	background: transparent;
	background-color: transparent;
  border: 1px solid $button-border-color;
  border-radius: 31px;
  color: $button-text-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.9px;
  margin: 37px 0 46px 0;
  max-height: 49px;
  max-width: 150px;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease;
  width: 100%;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: $color-orange;
    border: 1px solid $color-orange;
  }

  &:active {

    box-shadow: none;
    transform: translateY(0);
    background-color: $color-white;
    color: $button-text-color;
    border: 1px solid $button-border-color;
  }
}

.arrow {
  margin: 0 0 0 6.6px;
  position: relative;
  width: 33px;
  height: 33px;
  background-color: $button-select-color;
  border: 2px solid $button-vector-color;
  border-radius: 50%;
  transform: rotate(-90deg);
}
.arrow:after {
  position: absolute;
  top: 9px;
  left: 11px;
  content: '';
  display: block;
  width: 9.5px;
  height: 9.5px;
  border-left: 3px solid $button-vector-color;
  border-bottom: 3px solid $button-vector-color;
  transform: rotate(45deg);
}


</style>

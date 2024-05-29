<template>
  <div>
    <div class="btn">
      {{ $t('buttonTitle') }}
      <select>
        <option></option>
      </select>
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
  line-height: normal;
  margin: 37px 0 46px 0;
  max-height: 49px;
  max-width: 150px;
  padding: 4px 8px;
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
    border: 1px solid $color-orange;
    // transform: translateY(-0px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
    background-color: $color-white;
    color: $button-text-color;
    border: 1px solid $button-border-color;
  }
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 32px;
  height: 32px;
  border-radius: 68px;
  border: 2px solid $select-main-color;
  background: url(../assets/select-arrow.svg) no-repeat center;
  background-color: $select-bg-color;
  color: $select-main-color;
  appearance: none;
  margin: 0 0 0 6.6px;
}

option {
  display: none;
}

</style>

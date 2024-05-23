<template>
  <div>
    <div class="btn">
      Book Online
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
  background-color: $button-bg-color;
  border: 0.1rem solid $button-border-color;
  border-radius: 3.1rem;
  color: $button-text-color;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  margin: 2.9rem 0 4.6rem 0;
  max-height: 4.9rem;
  max-width: 15rem;
  padding: 0.4rem 0.8rem;
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

select {
  min-width: 3.2rem;
  min-height: 3.2rem;
  border-radius: 6.8rem;
  border: 0.2rem solid $select-main-color;
  background: url(../assets/select-arrow.svg) no-repeat center;
  background-color: $select-bg-color;
  color: $select-main-color;
  appearance: none;
}

</style>

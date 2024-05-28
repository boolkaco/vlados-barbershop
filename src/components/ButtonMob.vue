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
  background-image: none; 
	background: transparent;
	float: left;
	background-color: transparent;
  border: 0.1rem solid $button-border-color;
  border-radius: 3.1rem;
  color: $button-bg-color;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  margin: 2.9rem 0 4.6rem 0;
  height: 4.9rem;
  width: 15rem;
  padding: 0.8rem 1.8rem;
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
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 6.8rem;
  border: none;
  background: url(../assets/select-arrow.svg) no-repeat center;
  background-color: $select-bg-color;
  color: $select-main-color;
  appearance: none;
  margin-left: 0.6rem;
}

</style>

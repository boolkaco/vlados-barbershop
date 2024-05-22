<template>
  <div class="home_view">
    <HeaderView />
    <div class="home_view__wrp">
      <img v-bind:src="Logo" alt="">
      <p class="home_view__tittle">vlado's</p>
      <p class="home_view__tittle-text">barbershop</p>
      <p class="home_view__agite-text">Professional barber services in Prague</p>
      <Button />
      <img class="home_view__overview" v-bind:src="overview" alt="">
      <div class="home_view__about-us">
        <p class="home__view_about-us_title">About Us</p>
        <div class="home_view__about-us_text">
          <span class="home_view__about-us_text-item">Hey there! I'm Vlad, and welcome to Vlado's Barbershop! 
            We've created this space with over ten years of experience in the barber industry. We truly believe  that a fantastic haircut goes hand in hand with top-tier service
          </span>
          <span class="home_view__about-us_text-item">
            Our crew blends classic techniques with the latest trends to ensure your cut or shave isn't just on point but also timeless. It's not just about looking good here; it's about the entire experience. Get ready for personalized advice to choose the perfect haircut, grooming tips, and a range of extra services to make your visit truly special.
          </span>
        </div>
      </div>
      <div class="home_view__servise-and-prise">
        <p class="home_view__servise-and-prise__title">
          servises & prises
        </p>
        <table class="home_view__servise-and-prise__table">
          <thead>
            <tr class="qwe">
              <th class="home_view__servise-and-prise__table-thead"></th>
              <th class="home_view__servise-and-prise__table-thead">barber</th>
              <th class="home_view__servise-and-prise__table-thead">top-barber</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Classic haircut</th>
              <td>650 Kč</td>
              <td>850 Kč </td>
            </tr>
            <tr>
              <th>Classic haircut + beard trim</th>
              <td>990 Kč</td>
              <td>1200 Kč </td>
            </tr>
            <tr>
              <th>Full service - haircut + beard trim + facial skin care</th>
              <td>1390 Kč</td>
              <td>1590 Kč </td>
            </tr>
            <tr>
              <th>Children's haircut (6-12 y.o.)</th>
              <td>390 Kč</td>
              <td>590 Kč</td>
            </tr>
            <tr>
              <th>Clipper cut</th>
              <td>390 Kč</td>
              <td>590 Kč</td>
            </tr>
            <tr>
              <th>Beard trim</th>
              <td>390 Kč</td>
              <td>490 Kč</td>
            </tr>
            <tr>
              <th>Grooming + beard toning</th>
              <td>890 Kč</td>
              <td>990 Kč</td>
            </tr>
            <tr>
              <th>Wax hair removal</th>
              <td>100 Kč</td>
              <td>100 Kč</td>
            </tr>
          </tbody>
        </table>
        <ButtonOt class="home_view__servise-and-prise__button"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonOt from '@/components/ButtonOt.vue';
import HeaderView from './HeaderView.vue';
import Logo from '@/assets/Logo.svg';
import overview from '@/assets/barber-img.png';

</script>

<style scoped lang="scss">  
@import '@/scss/variables.scss';

.home_view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home_view__wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10.9rem;
}

.home_view__tittle {
  font-size: 4.1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: $text-title-color;
  margin: 1.3rem 0 0 0;
}

.home_view__tittle-text {
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: $text-title-color;
  margin: -0.5rem 0 3.2rem 0;
}

.home_view__agite-text {
  font-size: 2.6rem;
  font-weight: 300;
  text-transform: uppercase;
  color: $text-agite-color;
  width: 44.7rem;
  text-align: center;
}



.home_view__overview {
  transition: all 1000ms;
  position:unset;
    &:hover {
      filter: grayscale(100%);
      transition: all 1000ms;
    }
}



.home_view__about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.7rem 0 4.1rem 0;

}

.home__view_about-us_title {
  font-size: 5.1rem;
  text-transform: uppercase;
  margin-bottom: 3.2rem;
}

.home_view__about-us_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;
}

.home_view__about-us_text-item {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
   
}



.home_view__servise-and-prise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: solid 1px $color-gray-3;
  border-bottom: solid 1px $color-gray-3;
  margin: 0 0 2rem 0;
}

.home_view__servise-and-prise__title {
  text-transform: uppercase;
  font-size: 5.1rem;
  font-weight: 300;
  margin: 6rem 0 3.1rem 0;
}

.home_view__servise-and-prise__table {
  width: 100%;
  margin: 0 0 6.7rem 0;
  border-collapse: collapse;
}

.home_view__servise-and-prise__table-thead {
  text-align: right;
  border-bottom: 0.2rem solid $table-border-color;
}

th, td {
  height: 6.4rem;
  border-bottom: 0.1rem solid $table-border-color;
}

th {
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
}

td {
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: $prise-color;
  text-align: right;
}

.home_view__servise-and-prise__button {
  margin-bottom: 7rem;
}

</style>
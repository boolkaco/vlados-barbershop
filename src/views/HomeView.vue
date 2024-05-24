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
      <img class="home_view__overview-1" v-bind:src="overviewColor" alt="">
      <div class="home_view__about-us">
        <p class="home__view_about-us_title">About Us</p>
        <div class="home_view__about-us_text">
          <span class="home_view__about-us_text-item">Hey there! I'm Vlad, and welcome to Vlado's Barbershop!<br> 
            We've created this space with over ten years of experience in the barber industry.<br> We truly believe that a fantastic haircut goes hand in hand with top-tier service
          </span>
          <span class="home_view__about-us_text-item">
            Our crew blends classic techniques with the latest trends to ensure your cut or<br>shave isn't just on point but also timeless. It's not just about looking good here; it's<br>about the entire experience. Get ready for personalized advice to choose the<br>perfect haircut, grooming tips, and a range of extra services to make your visit<br>truly special.
          </span>
        </div>
      </div>
      <div class="home_view__servise-and-prise">
        <p class="home_view__servise-and-prise__title">
          services & prices
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
      <div class="home_view__our-team">
        <p class="home_view__our-team__title">
          our team
        </p>
        <div class="home_view__barber-info">
          <div class="home_view__barber-info_person">
            <img v-bind:src="imgAlex" class="home_view__barber-image">
            <div class="home_view__barber-block">
              <div class="home_view__barber-name">
                <div class="home_view__barber-first_name">Alex</div>
                <div class="home_view__barber_position">Barber</div>
              </div>
              <div class="home_view__barber-button">
                <ButtonWb />
              </div>
            </div>
          </div>
          <div class="home_view__barber-info_person">
            <img v-bind:src="imgVlad" class="home_view__barber-image">
            <div class="home_view__barber-block">
              <div class="home_view__barber-name">
                <div class="home_view__barber-first_name">Vlad</div>
                <div class="home_view__barber_position">Top-barber</div>
              </div>
              <div class="home_view__barber-button">
                <ButtonWb />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_view__follow-us">
        <div class="home_view__follow-us_title">
          <div class="home_view__follow-us_title-text">Follow us<br>on instagram</div>
          <ButtonOt />
        </div>
        <div class="home_view__follow-us_image-block">
          <img class="home_view__follow-us_image-item_text" v-bind:src="follow">
        </div>
        <img class="home_view__follow-us_image-item_phone" v-bind:src="phone"> 
      </div>
      <div class="home_view__contacts">
        <div class="home_view__contacts-title">
          contacts
        </div>
        <div class="home_view__contacts-list">
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">Adress</div>
            <div class="home_view__contacts-table_value">U Nikolajky 3, Praha 5 Smíchov 150 00</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">Phone</div>
            <div class="home_view__contacts-table_value">+420 774 271 121</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">Opening hours</div>
            <div class="home_view__contacts-table_value">Thu-Sat 9:00-19:30</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">Email</div>
            <div class="home_view__contacts-table_value">vladosbarbershop@gmail.com</div>
          </div>
        </div>
        <div class="home_view__contacts-text">
          Parking spots near the barbershop are always easy to find
        </div>
      </div>
      <div class="home_view-map_and_footer">
        <img class="home_view__map-img" v-bind:src="map">
        <div class="home_view-map_and_footer-item">
          <img class="home_view-map_and_footer-icon" v-bind:src="facebook" alt=""/>
          <img class="home_view-map_and_footer-icon" v-bind:src="whatsapp" alt=""/>
          <img class="home_view-map_and_footer-icon" v-bind:src="instagram" alt=""/>
        </div>
        <div class="home_view-map_and_footer-menu">
          <div class="home_view-map_and_footer-menu_item">ABOUT US</div>
          <div class="home_view-map_and_footer-menu_item">SERVICES & PRICES</div>
          <div class="home_view-map_and_footer-menu_item">OUR TEAM</div>
          <div class="home_view-map_and_footer-menu_item">CONTACTS</div>
        </div>
        <div class="home_view-map_and_footer-logo">
          <img class="home_view-map_and_footer-logo-item_arrow" v-bind:src="footerArrow">
          <img class="home_view-map_and_footer-logo-item_logo" v-bind:src="footerLogo">
        </div>
        <div class="home_view-map_and_footer-footer">
          <p class="home_view-map_and_footer-text">@ ALL RIGHTS RESERVED 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import ButtonOt from '@/components/ButtonOt.vue';
import ButtonWb from '@/components/ButtonWb.vue';
import HeaderView from './HeaderView.vue';
import Logo from '@/assets/logo.svg';
import overview from '@/assets/barber-nocolor-img.png';
import overviewColor from '@/assets/barber-img.png';
import imgAlex from '@/assets/barber-Alex-img.png'
import imgVlad from '@/assets/barber-Vlad-img.png'
import follow from '@/assets/follow-rotate-svg.svg'
import phone from '@/assets/iPhone-img.svg'
import map from '../assets/map-image.svg'
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import footerLogo from '@/assets/footer-logo.svg'
import footerArrow from '@/assets/footer-arrow.svg'


</script>

<style scoped lang="scss">  
@import '@/scss/variables.scss';
@media screen and (min-width: 70rem) {
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
    font-size: 2.5rem;
    font-weight: 300;
    text-transform: uppercase;
    color: $text-agite-color;
    width: 44.7rem;
    text-align: center;
  }







  .home_view__overview {
    transition: all 500ms;
    position: absolute;
    width: 140rem;
    height: 64.9rem;   
    top: 56.6rem;
    &:hover {
      transition: all 500ms;
      }
  }

  .home_view__overview-1 {
    transition: all 500ms;
    position: absolute;
    width: 140rem;
    height: 64.9rem;   
    top: 56.6rem;
    filter: opacity(0);
    &:hover {
      filter: opacity(100%);
      transition: all 500ms;
      }
  }







  .home_view__about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 71.6rem 0 4.1rem 0;
  }

  .home__view_about-us_title {
    font-size: 5.1rem;
    font-weight: 300;
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
    font-size: 1.9rem;
    line-height: 2.7rem;
    font-weight: 400;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    text-align: center; 
    text-indent: 3%;
  }






  .home_view__servise-and-prise {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: solid 1px $color-gray-3;
    border-bottom: solid 1px $color-gray-3;
    margin: 0 0 5.6rem 0;
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
  }

  .home_view__servise-and-prise__table-thead {
    text-align: right;
    border-bottom: 0.2rem solid $table-border-color;
  }

  .home_view__servise-and-prise__button {
    margin-bottom: 7rem;
  }







  .home_view__our-team {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .home_view__our-team__title {
    text-transform: uppercase;
    font-size: 5.1rem;
    font-weight: 300;
    margin: 0 0 5.8rem 0;
  }

  .home_view__barber-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 6.6rem 0;
  }

  .home_view__barber-info_person {
    margin: 0 1.05rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home_view__barber-image {
    transition: all 700ms;
    width: 57.1rem;
    height: 57.1rem;
    margin: 0 0 3.9rem 0;
    filter: grayscale(100%);

      &:hover {
        filter: grayscale(0); 
        transition: all 700ms;
      }
  }

  .home_view__barber-block {
    width: 57.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }


  .home_view__barber-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home_view__barber-first_name {
    font-size: 2.8rem;
    font-weight: 400;
  }

  .home_view__barber_position {
    font-size: 1.8rem;
    font-weight: 300;
  }







  .home_view__follow-us {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: $bg-follow-color;
    width: 100%;
    height: 56.9rem;
    margin: 0 0 5.9rem 0;
  }

  .home_view__follow-us_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10.9rem 0 0;
  }

  .home_view__follow-us_title-text {
    font-size: 4.2rem;
    font-weight: 400;
    color: $follow-us-title-color;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 3.3rem 0;
  }

  .home_view__follow-us_image-block {
    background-color: #FFFFFF0A;
    height: 115.3rem;
    width: 36.2rem;
    left: 17.5rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: end;
    transform: rotate(-26.1deg);
  }

  .home_view__follow-us_image-item_phone {
    position: relative;
    top: 7.7rem;
    right: 18rem;
  }







  .home_view__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    object-fit: cover;
    margin: 0 0 3.7rem 0;
  }

  .home_view__contacts-title {
    text-transform: uppercase;
    font-size: 5.1rem;
    font-weight: 300;
    margin-bottom: 6rem;
  }

  .home_view__contacts-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 140rem;
  }

  .home_view__contacts-item {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .home_view__contacts-table_title {
    font-size: 1.6rem;
    font-weight: 500;
    color: $table-title-color;
    margin: 0 0 1.5rem 2rem;
  }

  .home_view__contacts-table_value {
    border: 0.1rem solid $table-border-color;
    border-radius: 4.3rem;
    padding: 1.4rem 2rem;
    font-size: 1.8rem;
    font-weight: 400;
  }

  .home_view__contacts-text {
    font-size: 1.8rem;
    font-weight: 400;
    margin: 3.7rem 0 0 0;
    color: $text-contacts-color;
  }






  .home_view-map_and_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home_view-map_and_footer-img {
    height: 50.2rem;
    width: 100%;
  }
  
  .home_view-map_and_footer-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 4rem 0 3.3rem 0 ;
  }

  .home_view-map_and_footer-icon {
    transition: all 100ms;
    margin: 0 0.8rem;
    filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
        transition: all 100ms;
      }
  }

  .home_view-map_and_footer-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    margin: 0 0 4.3rem 0;
  }

  .home_view-map_and_footer-menu_item {
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0 1.7rem;

      &:hover {
        color: $link-footer-color;
        cursor: pointer;
      }
  }

  .home_view-map_and_footer-logo-item_arrow {
    position: relative;
    right: 51rem;
  }

  .home_view-map_and_footer-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;;
    width: 100%;
    margin: 0 0 3.4rem 0;
  }

  .home_view-map_and_footer-logo-item_logo {
    position: relative;
    right: 4.7rem;
  }

  .home_view-map_and_footer-footer {
    border-top: 1px solid $footer-border-color;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .home_view-map_and_footer-text {
    font-size: 1.6rem;
    font-weight: 400;
    color: $footer-text-color;
    margin: 3.2rem 0 10.4rem 0;

  }

}


</style>
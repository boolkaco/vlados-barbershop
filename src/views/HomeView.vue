<template>
  <div class="home_view">
    <HeaderView />
    <!-- <img v-if="isShow" class="home_view__overview" v-bind:src="mobileBg" alt=""> -->
    <div class="home_view__wrp">
      <img class="logo" v-bind:src="Logo" alt="">
      <img v-if="!isShow" class="home_view__title" v-bind:src="logoTitle" alt="">
      <!-- <img v-if="isShow" class="home_view__title" v-bind:src="logoTitleWhite" alt=""> -->
      <p class="home_view__agite-text">Professional barber services in Prague</p>
      <Button v-if="!isShow"/>
      <!-- <ButtonMob v-if="isShow"/> -->
      <!-- <img v-if="isShow" class="home_view__text_img" v-bind:src="haircutTextImg" alt=""> -->
      <img v-if="!isShow" class="home_view__overview" v-bind:src="overview" alt="">
      <img v-if="!isShow" class="home_view__overview-1" v-bind:src="overviewColor" alt="">
      <div class="home_view__about-us">
        <p class="home__view_about-us_title">About Us</p>
        <!-- <img class="home_view__overview_mobile" v-if="isShow" v-bind:src="overviewColor"> -->
        <div class="home_view__about-us_text">
          <span v-if="!isShow" class="home_view__about-us_text-item">Hey there! I'm Vlad, and welcome to Vlado's Barbershop!<br> 
            We've created this space with over ten years of experience in the barber industry.<br> We truly believe that a fantastic haircut goes hand in hand with top-tier service
          </span>
          <span v-if="!isShow" class="home_view__about-us_text-item">
            Our crew blends classic techniques with the latest trends to ensure your cut or<br>shave isn't just on point but also timeless. It's not just about looking good here; it's<br>about the entire experience. Get ready for personalized advice to choose the<br>perfect haircut, grooming tips, and a range of extra services to make your visit<br>truly special.
          </span>
          <!-- <span class="home_view__about-us_text-item" v-if="isShow">
            At Vlado's Barber Shop, we believe a great haircut is the cornerstone of style. Nestled in the heart of the city, our shop combines traditional techniques with modern flair, ensuring every cut and shave not only reflects your personal style but also stands the test of time. Here, grooming is not just about appearance—it's about the experience.
          </span> -->
        </div>
      </div>
      <div class="home_view__servise-and-prise">
        <p class="home_view__servise-and-prise__title">
          services & prices
        </p>
        <table class="home_view__servise-and-prise__table">
          <thead>
            <tr>
              <th class="home_view__servise-and-prise__table-thead"></th>
              <th class="home_view__servise-and-prise__table-thead">barber</th>
              <th class="home_view__servise-and-prise__table-thead">top-barber</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="table__thead">Classic haircut</th>
              <td>650 Kč</td>
              <td>850 Kč </td>
            </tr>
            <tr>
              <th class="table__thead">Classic haircut + beard trim</th>
              <td>990 Kč</td>
              <td>1200 Kč </td>
            </tr>
            <tr>
              <th class="table__thead">Full service - haircut + beard trim + facial skin care</th>
              <td>1390 Kč</td>
              <td>1590 Kč </td>
            </tr>
            <tr>
              <th class="table__thead">Children's haircut (6-12 y.o.)</th>
              <td>390 Kč</td>
              <td>590 Kč</td>
            </tr>
            <tr>
              <th class="table__thead">Clipper cut</th>
              <td>390 Kč</td>
              <td>590 Kč</td>
            </tr>
            <tr>
              <th class="table__thead">Beard trim</th>
              <td>390 Kč</td>
              <td>490 Kč</td>
            </tr>
            <tr>
              <th class="table__thead">Grooming + beard toning</th>
              <td>890 Kč</td>
              <td>990 Kč</td>
            </tr>
            <tr>
              <th class="table__thead">Wax hair removal</th>
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
        <MapGoogle class="home-view__google-map"/>
        <div class="home_view-map_and_footer-item">
          <img class="home_view-map_and_footer-icon" v-bind:src="facebook" alt=""/>
          <img class="home_view-map_and_footer-icon" v-bind:src="whatsapp" alt=""/>
          <img class="home_view-map_and_footer-icon" v-bind:src="instagram" alt=""/>
        </div>
        <div class="home_view-map_and_footer-menu">
          <div @click="scrollToAboutUs" class="home_view-map_and_footer-menu_item">ABOUT US</div>
          <div @click="scrollToServises" class="home_view-map_and_footer-menu_item">SERVICES & PRICES</div>
          <div @click="scrollToTeam" class="home_view-map_and_footer-menu_item">OUR TEAM</div>
          <div @click="scrollToContacts" class="home_view-map_and_footer-menu_item">CONTACTS</div>
        </div>
        <div class="home_view-map_and_footer-logo">
          <img @click="scrollToTop" class="home_view-map_and_footer-logo-item_arrow" v-bind:src="footerArrow">
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
import logoTitle from '@/assets/icons/vlados-title-icon.svg'
import Button from '@/components/Button.vue';
import ButtonOt from '@/components/ButtonOt.vue';
import ButtonWb from '@/components/ButtonWb.vue';
// import ButtonMob from '@/components/ButtonMob.vue'
import HeaderView from './HeaderView.vue';
import Logo from '@/assets/logo.svg';
import overview from '@/assets/barber-nocolor-img.png';
import overviewColor from '@/assets/barber-img.png';
import imgAlex from '@/assets/barber-Alex-img.png'
import imgVlad from '@/assets/barber-Vlad-img.png'
import follow from '@/assets/follow-rotate-svg.svg'
import phone from '@/assets/iPhone-img.svg'
import facebook from '@/assets/icons/facebook-hover-icon.svg'
import instagram from '@/assets/icons/instagram-hover-icon.svg'
import whatsapp from '@/assets/icons/whatsapp-hover-icon.svg'
import footerLogo from '@/assets/footer-logo.svg'
import footerArrow from '@/assets/footer-arrow.svg'
import MapGoogle from '@/components/Map.vue'
// import logoTitleWhite from '@/assets/logoTitleWhite.svg'
// import haircutTextImg from '@/assets/haircut-text-img.svg'
// import mobileBg from '@/assets/mobile-main-bg-img.png'
// import { ref, onMounted, onBeforeUnmount } from 'vue';

// const isShow = ref(window.innerWidth <= 767);

// const handleResize = async () => {

//   await new Promise(resolve => setTimeout(resolve, 50));
//   isShow.value = window.innerWidth <= 767;
// };

// onMounted(() => {
//   window.addEventListener('resize', handleResize);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleResize);
// });



const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const scrollToAboutUs = (): void => {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
};

const scrollToServises = (): void => {
  window.scrollTo({
    top: 1640,
    behavior: 'smooth',
  });
};

const scrollToTeam = (): void => {
  window.scrollTo({
    top: 2540,
    behavior: 'smooth',
  });
};

const scrollToContacts = (): void => {
  window.scrollTo({
    top: 4000,
    behavior: 'smooth',
  });
};


</script>

<style scoped lang="scss">  
@import '@/scss/variables.scss';
@media screen and (min-width: 1025px) {
  .home_view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home_view__wrp {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 107px;
  }

  .logo {
    width: 175px;
    height: 160px;
    margin: 0 60px 0 0;
  }

  .home_view-title_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home_view__title {
    width: 278px;
    height: 60px;
    margin: 13px 0 32px 0;
  }


  .home_view__agite-text {
    font-size: 25px;
    font-weight: 300;
    text-transform: uppercase; 
    color: $text-agite-color;
    width: 447px;
    text-align: center;
  }







  .home_view__overview {
    transition: all 500ms;
    position: absolute;
    width: 100vw;
    height: 649px;   
    top: 566px;
    &:hover {
      transition: all 500ms;
      }
  }

  .home_view__overview-1 {
    transition: all 500ms;
    position: absolute;
    width: 100vw;
    height: 649px;   
    top: 566px;
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
    margin: 716px 0 41px 0;
  }

  .home__view_about-us_title {
    font-size: 51px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  .home_view__about-us_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
  }

  .home_view__about-us_text-item {
    font-size: 19px;
    line-height: 27px;
    font-weight: 400;
    margin-bottom: 20px;
    padding-bottom: 10px;
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
    margin: 0 0 56px 0;
  }

  .home_view__servise-and-prise__title {
    text-transform: uppercase;
    font-size: 51px;
    font-weight: 300;
    margin: 60px 0 31px 0;
  }

  .home_view__servise-and-prise__table {
    width: 1400px;
    margin: 0 0 67px 0;
    border-collapse: collapse;

      th, td {
        height: 64px;
        border-bottom: 01px solid $table-border-color;
      }

      th {
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
      }

      td {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        color: $prise-color;
        text-align: right;
      }
  }

  .home_view__servise-and-prise__table-thead {
    border-bottom: 2px solid $table-border-color;
    text-align: right;
  }

  .table__thead {
    text-align: left;
  }

  .home_view__servise-and-prise__button {
    margin-bottom: 70px;
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
    font-size: 51px;
    font-weight: 300;
    margin: 0 0 58px 0;
  }

  .home_view__barber-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 66px 0;
  }

  .home_view__barber-info_person {
    margin: 0 10.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home_view__barber-image {
    transition: all 700ms;
    width: 571px;
    height: 571px;
    margin: 0 0 39px 0;
    filter: grayscale(100%);

      &:hover {
        filter: grayscale(0); 
        transition: all 700ms;
      }
  }

  .home_view__barber-block {
    width: 571px;
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
    font-size: 28px;
    font-weight: 400;
  }

  .home_view__barber_position {
    font-size: 18px;
    font-weight: 300;
  }







  .home_view__follow-us {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: $bg-follow-color;
    width: 100vw;
    height: 569px;
    margin: 0 0 59px 0;
  }

  .home_view__follow-us_title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 109px 0 0;
  }

  .home_view__follow-us_title-text {
    font-size: 42px;
    font-weight: 400;
    color: $follow-us-title-color;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 33px 0;
  }

  .home_view__follow-us_image-block {
    background-color: #FFFFFF0A;
    height: 1153px;
    width: 362px;
    left: 175px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: end;
    transform: rotate(-26.1deg);
  }

  .home_view__follow-us_image-item_text {
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

      @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
  }


  .home_view__follow-us_image-item_phone {
    position: relative;
    top: 78px;
    right: 180px;
  }







  .home_view__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    object-fit: cover;
    margin: 0 0 37px 0;
  }

  .home_view__contacts-title {
    text-transform: uppercase;
    font-size: 51px;
    font-weight: 300;
    margin-bottom: 60px;
  }

  .home_view__contacts-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1400px;
  }

  .home_view__contacts-item {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .home_view__contacts-table_title {
    font-size: 16px;
    font-weight: 500;
    color: $table-title-color;
    margin: 0 0 15px 2px;
  }

  .home_view__contacts-table_value {
    border: 0.1rem solid $table-border-color;
    border-radius: 43px;
    padding: 14px 20px;
    font-size: 18px;
    font-weight: 400;
  }

  .home_view__contacts-text {
    font-size: 18px;
    font-weight: 400;
    margin: 37px 0 0 0;
    color: $text-contacts-color;
  }







  .home_view-map_and_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .home-view__google-map {
    width: 100vw;
    height: 502px;
  }
  
  .home_view-map_and_footer-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0 33px 0 ;
  }

  .home_view-map_and_footer-icon {
    transition: all 300ms;
    margin: 0 8px;
    filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
      }
  }

  .home_view-map_and_footer-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    margin: 0 0 43px 0;
  }

  .home_view-map_and_footer-menu_item {
    font-size: 18px;
    font-weight: 400;
    margin: 0 17px;

      &:hover {
        color: $link-footer-color;
        cursor: pointer;
      }
  }

  .home_view-map_and_footer-logo-item_arrow {
    position: relative;
    right: 510px;
    transition: all .5s;
      &:hover {
        transform: scale(1.25); 
      }
  }

  .home_view-map_and_footer-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;;
    width: 100%;
    margin: 0 0 34px 0;
  }

  .home_view-map_and_footer-logo-item_logo {
    position: relative;
    right: 47px;
  }

  .home_view-map_and_footer-footer {
    border-top: 1px solid $footer-border-color;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .home_view-map_and_footer-text {
    font-size: 16px;
    font-weight: 400;
    color: $footer-text-color;
    margin: 32px 0 104px 0;

  }

}


</style>
<template>
  <div class="home_view">
    <HeaderView />
    <div class="home_view__wrp">
      <img class="logo" v-bind:src="Logo" alt="">
      <img class="home_view__title" v-bind:src="logoTitle" alt="">
      <p class="home_view__agite-text">{{ $t('mainSection.agiteText') }}</p>
      <ButtonWs @click="openBook"/>
      <img class="home_view__overview" v-bind:src="overview" alt="">
      <img class="home_view__overview-1" v-bind:src="overviewColor" alt="">
      <div class="home_view__about-us">
        <p class="home__view_about-us_title">{{ $t('aboutUs.title') }}</p>
        <div class="home_view__about-us_text">
          <span class="home_view__about-us_text-item">
            {{ $t('aboutUs.textFirstPart.paragraphOne') }}<br>{{ $t('aboutUs.textFirstPart.paragraphTwo') }}
          </span>
          <span class="home_view__about-us_text-item">
            {{ $t('aboutUs.textSecondPart.paragraphOne') }}
          </span>
        </div>
      </div>
      <div class="home_view__servise-and-prise">
        <p class="home_view__servise-and-prise__title">
          {{ $t('servicesAndPrices.title') }}
        </p>
        <table class="home_view__servise-and-prise__table">
          <thead>
            <tr>
              <th class="home_view__servise-and-prise__table-thead"></th>
              <th class="home_view__servise-and-prise__table-thead">{{ $t('servicesAndPrices.barberPricetitle') }}</th>
              <th class="home_view__servise-and-prise__table-thead">{{ $t('servicesAndPrices.topBarberPricetitle') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.firstHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.firstHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.firstHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.secondHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.secondHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.secondHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.thirdHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.thirdHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.thirdHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.fourthHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.fourthHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.fourthHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.fifthHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.fifthHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.fifthHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.sixthHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.sixthHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.sixthHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.seventhHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.seventhHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.seventhHaircutPrice.topBarberPrice') }}</td>
            </tr>
            <tr>
              <th class="table__thead">{{ $t('servicesAndPrices.eighthHaircutPrice.title') }}</th>
              <td>{{ $t('servicesAndPrices.eighthHaircutPrice.barberPrice') }}</td>
              <td>{{ $t('servicesAndPrices.eighthHaircutPrice.topBarberPrice') }}</td>
            </tr>
          </tbody>
        </table>
        <button 
          class="btn_ot home_view__btn-sp" 
          @click="openBook"
        >
        {{ $t('buttonTitle') }}
        </button>
      </div>
      <div class="home_view__our-team">
        <p class="home_view__our-team__title">
          {{ $t('ourTeam.title') }}
        </p>
        <div class="home_view__barber-info">
          <div class="home_view__barber-info_person">
            <img v-bind:src="imgAlex" class="home_view__barber-image">
            <div class="home_view__barber-block">
              <div class="home_view__barber-name">
                <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.firstBarber.barberName') }}</div>
                <div class="home_view__barber_position">{{ $t('ourTeam.barbers.firstBarber.barberPosition') }}</div>
              </div>
              <div class="home_view__barber-button">
                <button 
                  class="btn_wb home_view__btn-team"
                  @click="openBook"
                >
                {{ $t('buttonTitle') }}
                </button>
              </div>
            </div>
          </div>
          <div class="home_view__barber-info_person">
            <img v-bind:src="imgVlad" class="home_view__barber-image">
            <div class="home_view__barber-block">
              <div class="home_view__barber-name">
                <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.topBarber.barberName') }}</div>
                <div class="home_view__barber_position">{{ $t('ourTeam.barbers.topBarber.barberPosition') }}</div>
              </div>
              <div class="home_view__barber-button">
                <button 
                  class="btn_wb home_view__btn-team"
                  @click="openBook"
                >
                {{ $t('buttonTitle') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_view__follow-us">
        <div class="home_view__follow-us_title">
          <div class="home_view__follow-us_title-text">{{ $t('FollowUs.title.paragraphOne') }}<br>{{ $t('FollowUs.title.paragraphTwo') }}</div>
          <button 
            class="btn_ot home_view__btn-fu" 
            @click="redirectToInstagram"
          >
          {{ $t('FollowUs.buttonTitle') }}
          </button>
        </div>
        <div class="home_view__follow-us_image-block">
          <img href="#" class="home_view__follow-us_image-item_text" v-bind:src="follow">
        </div>
        <img class="home_view__follow-us_image-item_phone" v-bind:src="phone"> 
      </div>
      <div class="home_view__contacts">
        <div class="home_view__contacts-title">
          {{ $t('contacts.title') }}
        </div>
        <div class="home_view__contacts-list">
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">{{ $t('contacts.adress.title') }}</div>
            <div class="home_view__contacts-table_value">{{ $t('contacts.adress.adress') }}</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">{{ $t('contacts.phone.title') }}</div>
            <div class="home_view__contacts-table_value">{{ $t('contacts.phone.phone') }}</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">{{ $t('contacts.openingHours.title') }}</div>
            <div class="home_view__contacts-table_value">{{ $t('contacts.openingHours.hours') }}</div>
          </div>
          <div class="home_view__contacts-item">
            <div class="home_view__contacts-table_title">{{ $t('contacts.email.title') }}</div>
            <div class="home_view__contacts-table_value" href="#">{{ $t('contacts.email.email') }}</div>
          </div>
        </div>
        <div class="home_view__contacts-text">
          {{ $t('contacts.ShopParkingText') }}
        </div>
      </div>
      <div class="home_view-map_and_footer">
        <MapGoogle class="home-view__google-map"/>
        <div class="home_view-map_and_footer-item">
          <img @click="redirectToFacebook" class="home_view-map_and_footer-icon" v-bind:src="facebook" href="#"/>
          <img @click="redirectToWhatsapp" class="home_view-map_and_footer-icon" v-bind:src="whatsapp" href="#"/>
          <img @click="redirectToInstagram" class="home_view-map_and_footer-icon" v-bind:src="instagram" href="#"/>
        </div>
        <div class="home_view-map_and_footer-menu">
          <div @click="scrollToAboutUs" class="home_view-map_and_footer-menu_item">{{ $t('navigation.about') }}</div>
          <div @click="scrollToServises" class="home_view-map_and_footer-menu_item">{{ $t('navigation.services') }}</div>
          <div @click="scrollToTeam" class="home_view-map_and_footer-menu_item">{{ $t('navigation.team') }}</div>
          <div @click="scrollToContacts" class="home_view-map_and_footer-menu_item">{{ $t('navigation.contacts') }}</div>
        </div>
        <div class="home_view-map_and_footer-logo">
          <img 
            @click="scrollToTop" 
            class="home_view-map_and_footer-logo-item_arrow" 
            v-bind:src="footerArrow"
          >
          <img 
            class="home_view-map_and_footer-logo-item_logo" 
            v-bind:src="footerLogo"
          >
        </div>
        <div class="home_view-map_and_footer-footer">
          <p class="home_view-map_and_footer-text">{{ $t('footerText') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoTitle from '@/assets/icons/vlados-title-icon.svg'
import ButtonWs from '@/components/ButtonWs.vue';
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



function openBook() {
  window.open('https://n807969.alteg.io/', '_blank', 'noopener,noreferrer');
}


function redirectToFacebook() {
  window.open('https://www.facebook.com/profile.php?id=61558335386973', '_blank', 'noopener,noreferrer');
}

function redirectToWhatsapp() {
  window.open('#', '_blank', 'noopener,noreferrer');
}

function redirectToInstagram() {
  window.open('https://www.instagram.com/vlados_barbershop?igsh=MXRkdjkzcjExbWJ4Mw==', '_blank', 'noopener,noreferrer');
}


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
    margin: 107px 0 0 0;
    width: 100%;
    
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
    width: 1400px;
    height: 649px;   
    top: 566px;
    &:hover {
      transition: all 500ms;
      }
  }

  .home_view__overview-1 {
    transition: all 500ms;
    position: absolute;
    width: 1400px;
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
    margin: 716px 0 31px 0;
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
    padding: 0 20px;
  }

  .home_view__about-us_text-item {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    padding-bottom: 30px;
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

  .home_view__btn-sp {
    width: 135px;
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

  .home_view__btn-team {
    width: 135px;
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

  .home_view__btn-fu {
    width: 135px;
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
    margin: 0 0 15px 20px;
  }

  .home_view__contacts-table_value {
    border: 0.1rem solid $table-border-color;
    border-radius: 43px;
    padding: 14px 20px;
    font-size: 18px;
    font-weight: 400;

      &:hover {
        border: 0.1rem solid $color-orange;
        background-color: $color-orange;
        color: $color-white;
        cursor: pointer;
      }
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
    width: 1400px;
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

      &:active {
        filter: grayscale(100%);
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
<template>
  <div class="home_view">
    <Loader />
    <HeaderView />
    <div class="home_view__wrp">
      <div class="image-wrp-mobile">
        <img class="" v-bind:src="overview" alt="">
      </div>
      <div class="home_view__preview">
        <img class="home_view__logo--desktop" v-bind:src="LogoDecktop" alt="">
        <img class="home_view__logo--mobile" v-bind:src="LogoMobile" alt="">
        <p class="home_view__agite-text--desktop" v-html="$t('mainSection.agiteText')"></p>
        <p class="home_view__agite-text--mobile" v-html="$t('mainSection.agiteTextMobile')"></p>
        <a
            class="btn"
            :href="urls.openBook"
            type="button"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ $t('buttonTitle') }}
          <img class="home_view__select-arrow_img" :src="selectImg">
        </a>
      </div>
      <img class="home_view__overview" v-bind:src="overview" alt="">
      <img class="home_view__overview-1" v-bind:src="overviewColor" alt="">


      <div class="home_view__about-us">
        <p class="home__view_about-us_title">{{ $t('aboutUs.title') }}</p>
        <img class="home_view__about-us-image" :src="mobileImgDecoration" alt="">
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
        <a
          class="btn_ot home_view__btn-sp"
          :href="urls.openBook"
          type="button"
          target="_blank"
          rel="noopener noreferrer"
        >
        {{ $t('buttonTitle') }}
        </a>
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
                <a
                  class="btn_wb home_view__btn-wb"
                  :href="urls.openBook"
                  type="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('buttonTitle') }}
                </a>
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
                <a
                  class="btn_wb home_view__btn-wb"
                  :href="urls.openBook"
                  type="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('buttonTitle') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home_view__follow-us">
        <div class="home_view__follow-us_title">
          <div class="home_view__follow-us_title-text">{{ $t('FollowUs.title.paragraphOne') }}<br>{{ $t('FollowUs.title.paragraphTwo') }}</div>
          <a
            class="btn_ot home_view__btn-fu"
            :href = urls.redirectToInstagram
            type="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('FollowUs.buttonTitle') }}
          </a>
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

        <Social class="home_view__contacts-map"/>

        <div class="home_view__contacts-text">
          {{ $t('contacts.ShopParkingText') }}
        </div>
      </div>

      <div class="home_view-map_and_footer">
        <MapGoogle class="home-view__google-map"/>
        <Social class="home_view-map_and_footer-item"/>
        <div class="home-view-map__contacts-text">
          {{ $t('contacts.ShopParkingText') }}
        </div>
        <Navigation class="home_view-map_and_footer-menu--desktop"/>
        <Navigation class="home_view-map_and_footer-menu--mobile" :isVertical="true"/>
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
          <p class="home_view-map_and_footer-text">
            {{ t('footerText', { year: currentYear }) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import LogoDecktop from '@/assets/logo_with_text.svg';
import LogoMobile from '@/assets/logo_with_text_white.svg';
import overview from '@/assets/barber-nocolor-img.png';
import overviewColor from '@/assets/barber-img.png';
import imgAlex from '@/assets/barber-Alex-img.png'
import imgVlad from '@/assets/barber-Vlad-img.png'
import follow from '@/assets/follow-rotate-svg.svg'
import phone from '@/assets/iPhone-img.svg'
import footerLogo from '@/assets/footer-logo.svg'
import footerArrow from '@/assets/footer-arrow.svg'
import MapGoogle from '@/components/Map.vue'
import Social from '@/components/Social.vue'
import Navigation from '@/components/Navigation.vue'
import selectImg from '@/assets/icons/button-select-icon.svg'
import mobileImgDecoration from '@/assets/mobile_decoration.png'
import Loader from '@/components/loader.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentYear = new Date().getFullYear();

const urls: Record<string, string> = {
  openBook: 'https://n807969.alteg.io/',
  redirectToInstagram: 'https://www.instagram.com/vlados_barbershop?igsh=MXRkdjkzcjExbWJ4Mw==',
};


function scrollToTop () {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

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
  position: relative;

  .home_view__preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    height: calc(70vh);
  }

  .image-wrp-mobile {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.62);
      z-index: 1;
    }

    @media (max-width: $medium-screen) {
      display: block;
    }
  }

  .home_view__agite-text {
    &--desktop, &--mobile {
      font-size: 25px;
      font-weight: 300;
      text-transform: uppercase;
      color: $text-agite-color;
      text-align: center;
    }

    &--mobile {
      color: #fff;
    }

    &--mobile {
      display: none;
    }

    @media (max-width: $medium-screen) {
      &--desktop {
        display: none;
      }

      &--mobile {
        display: block;
      }
    }
  }

  @media (max-width: $medium-screen) {
    margin-top: 200px;
  }
}

.home_view__logo--desktop {
  width: 278px;
  margin-bottom: 32px;

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view__logo--mobile {
  width: 145px;
  margin-bottom: 32px;
  display: none;

  @media (max-width: $medium-screen) {
    display: block;
  }
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

.home_view__select-arrow_img {
  width: 34px;
  height: 34px;
  margin: 7px 0px 8px 6.6px;
  border: 1px solid white;
  border-radius: 34px;

  @media (max-width: $medium-screen) {
    border-color: transparent;
  }
}

.home_view__overview {
  transition: all 500ms;
  //position: absolute;
  width: 1400px;
  height: 649px;
  top: 566px;

  &:hover {
    transition: all 500ms;
  }

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view__overview-1 {
  transition: all 500ms;
  position: absolute;
  width: 1400px;
  height: 649px;
  top: 566px;
  margin-top: 11px;
  filter: opacity(0);
  &:hover {
    filter: opacity(100%);
    transition: all 500ms;
  }

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view__about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
  width: 100%;
  background-color: #fff;

  @media (max-width: $medium-screen) {
    padding-top: 48px;
  }
}

.home__view_about-us_title {
  font-size: 42px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 32px;

  @media (max-width: $medium-screen) {
    font-size: 34px;
  }
}

.home_view__about-us-image {
  width: 100%;
  padding: 0 20px;
  height: auto;
  display: none;
  margin-bottom: 35px;

  @media (max-width: $medium-screen) {
    display: block;
  }
}

.home_view__about-us_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  padding: 0 20px;

  @media (max-width: $medium-screen) {
    width: 100%;
  }
}

.home_view__about-us_text-item {
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  padding-bottom: 30px;
  text-align: center;
  text-indent: 3%;

  @media (max-width: $medium-screen) {
    text-align: justify;
    text-indent: 0;
  }
}






.home_view__servise-and-prise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-top: solid 1px $color-gray-3;
  border-bottom: solid 1px $color-gray-3;

  @media (max-width: $medium-screen) {
    padding: 0 20px !important;
  }
}

.home_view__servise-and-prise__title {
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 300;
  margin: 59px 0 31px 0;
  //white-space: nowrap;

  @media (max-width: $medium-screen) {
    font-size: 34px;
  }
}

.home_view__servise-and-prise__table {
  width: 1160px;
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

    @media (max-width: $medium-screen) {
      font-size: 14px;
    }
  }

  td {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: $prise-color;
    text-align: right;

    @media (max-width: $medium-screen) {
      font-size: 12px;
    }
  }

  @media (max-width: $medium-screen) {
    width: 100%;
  }
}

.home_view__servise-and-prise__table-thead {
  border-bottom: 2px solid $table-border-color;
  text-align: right;

  @media (max-width: $medium-screen) {
    font-size: 12px !important;
  }
}

.table__thead {
  text-align: left;
  padding-right: 8px;
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
  background-color: #fff;
  padding-top: 56px;

  @media (max-width: $medium-screen) {
    width: 100%;
  }
}

.home_view__our-team__title {
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 300;
  margin: 0 0 58px 0;

  @media (max-width: $medium-screen) {
    font-size: 34px;
  }
}

.home_view__barber-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 66px 0;

  @media (max-width: $medium-screen) {
    flex-direction: column-reverse;
  }
}

.home_view__barber-info_person {
  margin: 0 10.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: $medium-screen) {
    &:last-of-type {
      padding-bottom: 52px;
    }
  }
}

.home_view__barber-image {
  transition: all 0.4s;
  width: 571px;
  height: 571px;
  margin: 0 0 39px 0;
  z-index: 1;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
    z-index: 20;
  }

  @media (max-width: $medium-screen) {
    width: 100%;
    height: auto;
  }
}

.home_view__barber-block {
  width: 571px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: $medium-screen) {
    width: 100%;
    height: auto;
  }
}


.home_view__barber-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.home_view__barber-first_name {
  font-size: 28px;
  font-weight: 400;
  margin: 0 0 15px 0;
}

.home_view__barber_position {
  font-size: 18px;
  font-weight: 300;
}

.home_view__btn-team {
  width: 135px;
}

.home_view__follow-us {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $bg-follow-color;
  width: 100vw;
  height: 569px;
  margin: 0 0 59px 0;

  @media (max-width: $medium-screen) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    margin-bottom: 0;
  }
}

.home_view__follow-us_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 49px 0 0;

  @media (max-width: $medium-screen) {
    margin: 0;
  }
}

.home_view__follow-us_title-text {
  font-size: 42px;
  font-weight: 400;
  color: $follow-us-title-color;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 33px 0;

  @media (max-width: $medium-screen) {
    font-size: 34px;
    font-weight: 300;
  }
}

.home_view__btn-fu {
  width: 135px;
  &:hover {
    background-color: $color-orange;
    border: 1px solid $color-orange;
  }

  @media (max-width: $medium-screen) {
    margin-bottom: 60px;
  }
}

.home_view__follow-us_image-block {
  background-color: #FFFFFF0A;
  height: 1153px;
  width: 362px;
  left: 183px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  transform: rotate(-26.1deg);
  padding: 0 8px 0 0;

  @media (max-width: $medium-screen) {
    background-color: transparent;
    width: 100%;
    height: auto;
    left: 0;
    justify-content: center;
    transform: rotate(0);
    padding: 0 20px;
  }
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

  @media (max-width: $medium-screen) {
    width: 100%;
  }
}


.home_view__follow-us_image-item_phone {
  position: relative;
  right: 180px;

  @media (min-width: $medium-screen) {
    top: 78px;
  }

  @media (max-width: $medium-screen) {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: 0;
  }

  @media (max-width: $small-screen) {
    width: 60%;
  }
}

.home_view__contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: cover;
  margin: 0 0 36px 0;
  background-color: #fff;
  padding-top: 50px;

  @media (max-width: $small-screen) {
    margin: 0;
  }
}

.home_view__contacts-title {
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 60px;

  @media (max-width: $medium-screen) {
    font-size: 34px;
    margin-bottom: 32px;
  }
}

.home_view__contacts-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1133px;
  height: 83px;

  @media (max-width: $medium-screen) {
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
    justify-content: center;
  }
}

.home_view__contacts-item {
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: $medium-screen) {
    padding-bottom: 46px;

    &:last-child {
      display: none;
    }
  }
}

.home_view__contacts-table_title {
  font-size: 16px;
  font-weight: 500;
  color: $table-title-color;
  margin: 0 0 15px 20px;

  @media (max-width: $medium-screen) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-bottom: 6px;
  }
}

.home_view__contacts-table_value {
  border: 0.1rem solid $table-border-color;
  border-radius: 43px;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 400;
  z-index: 1;

  &:hover {
    border: 0.1rem solid $color-orange;
    background-color: $color-orange;
    color: $color-white;
    cursor: pointer;
  }

  @media (max-width: $medium-screen) {
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
    padding: 0;
  }
}

.home_view__contacts-map {
  display: none;
  margin-bottom: 60px;

  @media (max-width: $medium-screen) {
    display: block;
  }
}

.home_view__contacts-text {
  font-size: 18px;
  font-weight: 400;
  margin: 37px 0 0 0;
  color: $text-contacts-color;

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home-view-map__contacts-text {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  padding: 30px 16px 50px 16px;
  color: rgba(0, 0, 0, 0.5);
  display: none;

  @media (max-width: $medium-screen) {
    display: block;
  }
}







.home_view-map_and_footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
}

.home-view__google-map {
  width: 1400px;
  height: 502px;
}

.home_view-map_and_footer-item {
  margin: 40px 0 33px 0;

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view-map_and_footer-icon {
  transition: all 0.4s;
  margin: 0 8px;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  &:active {
    filter: grayscale(100%);
  }
}

.home_view-map_and_footer-menu--desktop {
  margin: 0 0 43px 0;
  font-size: 15px;

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view-map_and_footer-menu--mobile {
  margin: 0 0 38px 0;
  font-size: 15px;
  display: none;

  @media (max-width: $medium-screen) {
    display: block;
  }
}


.home_view-map_and_footer-logo-item_arrow {
  position: absolute;
  left: 93px;
  transition: all .4s;
  &:hover {
    cursor: pointer;
  }
}

.home_view-map_and_footer-logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;;
  width: 1400px;
  margin: 0 0 34px 0;
  position: relative;

  @media (max-width: $medium-screen) {
    display: none;
  }
}

.home_view-map_and_footer-logo-item_logo {
  margin:0 10px 0 0 ;
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

  @media (max-width: $medium-screen) {
    height: 60px;
    margin: 0 !important;
    display: flex;
    align-items: center;
  }
}

</style>
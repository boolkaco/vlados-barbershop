<template>
  <div class="home_view__barber-info">
    <div class="home_view__barber-info_person">
      <div class="home_view__barber-info_person-img">
        <img
            src="../assets/barber-Vlad-nocolor-img.png"
            class="home_view__barber-image"
            alt="barber1"
        >
        <img
            src="../assets/barber-Vlad-nocolor-img.png"
            class="home_view__barber-image--hovered"
            alt="barber-nocolor1"
        >
      </div>
      <div class="home_view__barber-block">
        <div class="home_view__barber-name">
          <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.topBarber.barberName') }}</div>
          <div class="home_view__barber_position">{{ $t('ourTeam.barbers.topBarber.barberPosition') }}</div>
        </div>
        <div class="home_view__barber-button">
          <a
              class="btn_wb home_view__btn-wb"
              :href="data.booking"
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
      <div class="home_view__barber-info_person-img">
        <img
            src="../assets/barber-Alex-nocolor-img.jpg"
            class="home_view__barber-image"
            alt="barber1"
        >
        <img
            src="../assets/barber-Alex-img.jpg"
            class="home_view__barber-image--hovered"
            alt="barber-nocolor1"
        >
      </div>
      <div class="home_view__barber-block">
        <div class="home_view__barber-name">
          <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.firstBarber.barberName') }}</div>
          <div class="home_view__barber_position">{{ $t('ourTeam.barbers.firstBarber.barberPosition') }}</div>
        </div>
        <div class="home_view__barber-button">
          <a
              class="btn_wb home_view__btn-wb"
              :href="data.booking"
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
      <div class="home_view__barber-info_person-img">
        <img
            src="../assets/barber-Mariia-img.jpg"
            class="home_view__barber-image"
            alt="barber3"
        >
        <img
            src="../assets/barber-Mariia-img.jpg"
            class="home_view__barber-image--hovered"
            alt="barber-nocolor3"
        >
      </div>
      <div class="home_view__barber-block">
        <div class="home_view__barber-name">
          <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.secondBarber.barberName') }}</div>
          <div class="home_view__barber_position">{{ $t('ourTeam.barbers.secondBarber.barberPosition') }}</div>
        </div>
        <div class="home_view__barber-button">
          <a
              class="btn_wb home_view__btn-wb"
              :href="data.booking"
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
      <div class="home_view__barber-info_person-img">
        <img
            src="../assets/barber-Sergej-img.jpg"
            class="home_view__barber-image"
            alt="barber4"
        >
        <img
            src="../assets/barber-Sergej-img.jpg"
            class="home_view__barber-image--hovered"
            alt="barber-nocolor4"
        >
      </div>
      <div class="home_view__barber-block">
        <div class="home_view__barber-name">
          <div class="home_view__barber-first_name">{{ $t('ourTeam.barbers.thirdBarber.barberName') }}</div>
          <div class="home_view__barber_position">{{ $t('ourTeam.barbers.thirdBarber.barberPosition') }}</div>
        </div>
        <div class="home_view__barber-button">
          <a
              class="btn_wb home_view__btn-wb"
              :href="data.booking"
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
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});


</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.home_view__barber-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: start;
  margin: 0 0 66px 0;
  width: 100%;
}

@media (max-width: $medium-screen) {
  .home_view__barber-info {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
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
    width: 100%;
    &:last-of-type {
      padding-bottom: 52px;
    }
  }
}

.home_view__barber-info_person-img {
  position: relative;
  width: 100%;
  height: 570px;
  overflow: hidden;

  &:hover {
    .home_view__barber-image--hovered {
      transition: opacity 0.5s ease-in-out;
      opacity: 1;
    }
  }
}

.home_view__barber-image,
.home_view__barber-image--hovered {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: $medium-screen) {
  .home_view__barber-info {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .home_view__barber-info_person {
    width: 100%;
  }

  .home_view__barber-info_person-img {
    aspect-ratio: 1 / 1;
    height: auto;
  }

  .home_view__barber-image {
    margin: 0;
  }
}

.home_view__barber-image {
  transition: all 0.4s;
  width: 100%;
  margin: 0 0 39px 0;
  z-index: 1;

  &:hover {
    z-index: 20;
  }

  @media (max-width: $medium-screen) {
    width: 100%;
    height: auto;
  }
}

.home_view__barber-image--hovered {
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  opacity: 0;
  z-index: 11;
  left: 0;

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
  margin-top: 32px;

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

</style>
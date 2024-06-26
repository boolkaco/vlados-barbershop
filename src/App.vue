<template>
  <div>
    <RouterView />
  </div>
</template>


<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { onMounted, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();

  const metaInfo = {
    en: {
      title: "Vlado's Barbershop - English",
      description: "Vlado's Barbershop - professional barber services in Prague. Book online now!",
    },
    ru: {
      title: "Барбершоп Влада - Русский",
      description: "Барбершоп Влада - профессиональные услуги парикмахера в Праге. Запишитесь онлайн!",
    },
    uk: {
      title: "Барбершоп Влада - Українська",
      description: "Барбершоп Влада - професійні послуги перукаря в Празі. Запишіться онлайн!",
    },
    cs: {
      title: "Vlado's Barbershop - Česky",
      description: "Vlado's Barbershop - profesionální služby holičství v Praze. Rezervujte online!",
    },
  };

  function updateMetaTags() {
    const { title, description } = metaInfo[locale.value] || metaInfo.en;
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
  }

  onMounted(() => {
    updateMetaTags();
    document.title = 'Vlado\'s Barbershop';
    document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://www.vladosbarbershop.cz/');
  });

  watch(locale, () => {
    updateMetaTags();
  });
</script>

<style scoped lang="scss">


</style>

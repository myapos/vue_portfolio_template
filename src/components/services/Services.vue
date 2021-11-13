<template>
  <div class="cta" id="services">
    <div class="header font-bold text-3xl text-center m-5">
      {{ $t("Services.title") }}
    </div>
    <app-ruler name="information" />
    <div class="flex justify-center teaser">{{ $t("Services.subtitle") }}</div>
    <div class="container m-auto">
      <section class="services p-5 flex flex-row flex-wrap justify-center">
        <app-service-card
          :title="$t('Services.app_development')"
          :text="$t('lorem_ipsum')"
          icon="mobile-alt"
        />
        <app-service-card
          :title="$t('Services.ui_design')"
          :text="$t('lorem_ipsum')"
          icon="chart-pie"
        />
        <app-service-card
          :title="$t('Services.cloud_hosting')"
          :text="$t('lorem_ipsum')"
          icon="cloud"
        />
        <app-service-card
          :title="$t('Services.clouding_pen')"
          :text="$t('lorem_ipsum')"
          icon="pencil-alt"
        />
      </section>
    </div>
  </div>
</template>

<script>
import AppServiceCard from "./ServiceCard.vue";
import AppRuler from "@/shared/ruler/Ruler.vue";
export default {
  name: "Services",
  components: {
    AppServiceCard,
    AppRuler,
  },
};
</script>

<style scoped>
.header {
  text-transform: uppercase;
}
</style>

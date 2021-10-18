<template>
  <app-header />
  <app-slider />
  <app-about />
  <app-footer />
</template>

<script>
import AppHeader from "../components/Header.vue";
import AppFooter from "../components/Footer.vue";
import AppAbout from "../components/About.vue";
import AppSlider from "../components/slider/Slider.vue";

export default {
  name: "Base",
  components: {
    AppHeader,
    AppFooter,
    AppAbout,
    AppSlider,
  },
  props: {},
};
</script>

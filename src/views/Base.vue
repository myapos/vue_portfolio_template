<template>
  <app-header />
  <app-slider />
  <app-about />
  <app-skills />
  <app-footer />
</template>

<script>
import AppHeader from "../components/Header.vue";
import AppFooter from "../components/Footer.vue";
import AppAbout from "../components/about/About";
import AppSlider from "../components/slider/Slider.vue";
import AppSkills from "../components/skills/Skills.vue";

export default {
  name: "Base",
  components: {
    AppHeader,
    AppFooter,
    AppAbout,
    AppSlider,
    AppSkills,
  },
  props: {},
};
</script>

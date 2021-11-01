<template>
  <app-header />
  <app-slider />
  <app-about />
  <app-skills />
  <app-download />
  <app-services />
  <app-reviews />
  <app-works />
  <app-fun-facts />
  <app-footer />
  <app-scroll-to-top />
</template>

<script>
import AppHeader from "../components/Header.vue";
import AppFooter from "../components/Footer.vue";
import AppAbout from "../components/about/About";
import AppSlider from "../components/slider/Slider.vue";
import AppSkills from "../components/skills/Skills.vue";
import AppDownload from "../components/download/Download.vue";
import AppScrollToTop from "../components/scrollToTop/ScrollToTop.vue";
import AppServices from "../components/services/Services.vue";
import AppReviews from "../components/reviews/Reviews.vue";
import AppWorks from "../components/works/Works.vue";
import AppFunFacts from "../components/funfacts/FunFacts.vue";

export default {
  name: "Base",
  components: {
    AppHeader,
    AppFooter,
    AppAbout,
    AppSlider,
    AppSkills,
    AppDownload,
    AppScrollToTop,
    AppServices,
    AppReviews,
    AppWorks,
    AppFunFacts,
  },
  props: {},
};
</script>

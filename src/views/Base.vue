<template>
  <app-header />
  <!-- <app-about />
  <app-footer /> -->
</template>

<script>
import AppHeader from "../components/Header.vue";
// import AppFooter from "../components/Footer.vue";
// import AppAbout from "../components/About.vue";
export default {
  name: "Base",
  components: {
    AppHeader,
    // AppFooter,
    // AppAbout,
  },
  props: {},
};
</script>

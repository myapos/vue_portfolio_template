<template>
  <app-header />
  <div>
    <app-about />
  </div>
  <app-footer />
</template>

<script>
import AppFooter from "../components/Footer.vue";
import AppHeader from "../components/Header.vue";
import AppAbout from "../components/About.vue";
export default {
  name: "Base",
  components: {
    AppFooter,
    AppHeader,
    AppAbout,
  },
  props: {},
};
</script>

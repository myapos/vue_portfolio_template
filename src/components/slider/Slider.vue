<template>
  <img v-if="activeTheme === 'dark'" src="../../assets/black_greet.gif" />
  <img v-if="activeTheme === 'light'" src="../../assets/white_greet.gif" />
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
export default {
  name: "Slider",
  components: {},
  computed: {
    activeTheme() {
      return this.$store.getters.getActiveTheme();
    },
  },
};
</script>

<style scoped>
.carousel {
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  height: 500px;
  width: 100%;
}
</style>

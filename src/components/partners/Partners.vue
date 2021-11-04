<template>
  <div class="partners relative bg-gray-50 dark:bg-gray-200 p-16">
    <div class="intro_text text-3xl text-center">OUR PARTNERS</div>
    <app-ruler name="information" />
    <div class="m-5 text-center teaser">Those who trust us</div>
    <carousel :items-to-show="4" autoplay="2000" pauseAutoplayOnHover="true">
      <slide v-for="partner in partners" :key="partner.id"
        ><img :src="partner.background_image"
      /></slide>
      <template #addons> </template>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import AppRuler from "@/ui-kit/ruler/Ruler.vue";
import "vue3-carousel/dist/carousel.css";
import * as data from "./data";

export default {
  name: "Partners",
  components: {
    AppRuler,
    Carousel,
    Slide,
  },
  data() {
    return {
      partners: data.partners,
    };
  },
};
</script>

<style scoped>
img {
  max-height: 400px;
  max-width: 200px;
}

img:hover {
  cursor: e-resize;
}
.intro_text {
  text-transform: uppercase;
}
</style>

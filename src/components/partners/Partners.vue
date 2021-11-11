<template>
  <div class="partners relative bg-gray-50 dark:bg-gray-200 p-16">
    <div class="intro_text text-3xl text-center">OUR PARTNERS</div>
    <app-ruler name="information" />
    <div class="m-5 text-center teaser">Those who trust us</div>
    <carousel
      :items-to-show="num_of_items"
      autoplay="2000"
      pauseAutoplayOnHover="true"
    >
      <slide v-for="partner in partners" :key="partner.id"
        ><img :src="partner.background_image"
      /></slide>
      <template #addons> </template>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import AppRuler from "@/shared/ruler/Ruler.vue";
import "vue3-carousel/dist/carousel.css";
import * as data from "./data";

export default {
  name: "Partners",
  components: {
    AppRuler,
    Carousel,
    Slide,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    // this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      partners: data.partners,
      num_of_items: this.handleResize(),
    };
  },
  methods: {
    handleResize() {
      let num_of_items = 4;
      if (screen.width < 767) {
        num_of_items = 3;
      }
      if (screen.width < 645) {
        num_of_items = 2;
      }

      if (screen.width < 545) {
        num_of_items = 1;
      }

      this.num_of_items = num_of_items;
      return num_of_items;
    },
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

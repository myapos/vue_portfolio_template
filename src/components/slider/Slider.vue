<template>
  <div>
    <div class="relative z-0 slide_background slide_background_black"></div>

    <div
      class="
        details
        text-center text-gray-50
        ml-auto
        mr-auto
        w-auto
        z-0
        absolute
      "
    >
      <div class="flex justify-center items-center">
        <transition-group name="slide-fade">
          <app-slide :key="activeSlide" :activeSlide="activeSlide" />
        </transition-group>
      </div>
      <div class="flex cursor-pointer justify-center">
        <mdicon
          class="ml-2"
          :name="activeSlide === 'Slide1' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('Slide1')"
        />
        <mdicon
          class="ml-2"
          :name="activeSlide === 'Slide2' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('Slide2')"
        />
        <mdicon
          class="ml-2"
          :name="activeSlide === 'Slide3' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('Slide3')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppSlide from "./Slide.vue";
import { ACTION_TYPES } from "@/store/actionTypes";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "Slider",
  components: {
    AppSlide,
  },
  data() {},
  computed: {
    activeTheme: function () {
      const activeTheme = this.$store.getters.getActiveTheme();
      return activeTheme;
    },
    activeSlide: function () {
      const activeSlide = this.$store.getters.getActiveSlide();
      return activeSlide;
    },
  },
  methods: {
    changeActiveSlide(slide) {
      this.$store.dispatch(ACTION_TYPES.SET_ACTIVE_SLIDE, slide);
    },
  },
};
</script>

<style scoped>
img {
  height: 600px;
  width: 100%;
}

.intro_text {
  text-transform: uppercase;
}
.details {
  z-index: 1;
  top: 30%;
  left: 0;
  right: 0;
  min-width: var(--min-width);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-1000px);
  opacity: 0;
}
.slide_background {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  background-attachment: fixed;
  background-position: 0px 90px;
}
.slide_background_black {
  background-image: url("../../assets/slider/black_greet.gif");
  background-color: #000714;
}
.slide_background_white {
  background-image: url("../../assets/slider/white_greet.gif");
}
</style>

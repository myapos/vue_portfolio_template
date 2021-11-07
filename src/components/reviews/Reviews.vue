<template>
  <div class="relative">
    <div
      v-if="activeTheme === 'dark'"
      class="relative z-0 slide_background slide_background_black"
    ></div>
    <div
      v-if="activeTheme === 'light'"
      class="relative z-0 slide_background slide_background_white"
    ></div>
    <div class="cover absolute left-0 right-0 z-0"></div>
    <div
      class="
        details
        text-center
        ml-auto
        mr-auto
        left-0
        right-0
        text-green-50
        dark:text-gray-50
        z-0
        absolute
      "
    >
      <div class="relative">
        <div class="intro_text text-3xl text-center">Reviews</div>
        <app-ruler name="information" />
        <div class="m-5 teaser custom_teaser">What people say about us</div>
        <transition-group name="slide-fade">
          <app-review-slide-1 v-if="activeSlide === 'slide1'" />
          <app-review-slide-2 v-if="activeSlide === 'slide2'" />
          <app-review-slide-3 v-if="activeSlide === 'slide3'" />
        </transition-group>
      </div>
      <div class="flex cursor-pointer justify-center controls">
        <mdicon
          class="ml-2"
          :name="activeSlide === 'slide1' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('slide1')"
        />
        <mdicon
          class="ml-2"
          :name="activeSlide === 'slide2' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('slide2')"
        />
        <mdicon
          class="ml-2"
          :name="activeSlide === 'slide3' ? 'Rhombus' : 'RhombusOutline'"
          @click="changeActiveSlide('slide3')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import AppReviewSlide1 from "./ReviewSlide1.vue";
import AppReviewSlide2 from "./ReviewSlide2.vue";
import AppReviewSlide3 from "./ReviewSlide3.vue";
import AppRuler from "../../ui-kit/ruler/Ruler.vue";
export default {
  name: "Reviews",
  components: {
    AppReviewSlide1,
    AppReviewSlide2,
    AppReviewSlide3,
    AppRuler,
  },
  data() {
    return {
      activeSlide: "slide1",
    };
  },
  computed: {
    activeTheme: function () {
      const activeTheme = this.$store.getters.getActiveTheme();
      return activeTheme;
    },
  },
  methods: {
    changeActiveSlide(slide) {
      this.activeSlide = slide;
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
  left: 0;
  right: 0;
  top: 20%;
}

.controls {
  margin-top: 12rem;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
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
  background-image: url("../../assets/office-tools-pc-desk.jpg");
  background-color: #000714;
}
.slide_background_white {
  background-image: url("../../assets/office-tools-pc-desk.jpg");
}
.cover {
  background-color: #000714;
  height: 500px;
  width: 100%;
  top: 0;
  opacity: 0.8;
}
.custom_teaser {
  color: white;
}
</style>

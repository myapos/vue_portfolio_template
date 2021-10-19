<template>
  <div>
    <img
      class="relative z-0"
      v-if="activeTheme === 'dark'"
      src="../../assets/black_greet.gif"
    />
    <img
      class="relative z-0"
      v-if="activeTheme === 'light'"
      src="../../assets/white_greet.gif"
    />
    <div
      class="
        details
        text-center
        ml-auto
        mr-auto
        left-0
        right-0
        dark:text-gray-50
        z-0
        absolute
      "
    >
      <!--   <div class="relative">
        <transition-group name="slide-fade">
          <div v-if="activeSlide === 'slide1'">
            <div class="absolute text-center ml-auto mr-auto left-0 right-0">
              slide 1
            </div>
          </div>
          <div v-if="activeSlide === 'slide2'">
            <div class="absolute text-center ml-auto mr-auto left-0 right-0">
              slide 2
            </div>
          </div>
          <div v-if="activeSlide === 'slide3'">
            <div class="absolute text-center ml-auto mr-auto left-0 right-0">
              slide 3
            </div>
          </div>
        </transition-group>
      </div> -->
      <div class="relative">
        <transition-group name="slide-fade">
          <app-slide-1 v-if="activeSlide === 'slide1'" />
          <app-slide-2 v-if="activeSlide === 'slide2'" />
          <app-slide-3 v-if="activeSlide === 'slide3'" />
        </transition-group>
      </div>
      <div class="flex cursor-pointer justify-center controls">
        <mdicon
          class="ml-2"
          name="RhombusOutline"
          @click="changeActiveSlide('slide1')"
        />
        <mdicon
          class="ml-2"
          name="RhombusOutline"
          @click="changeActiveSlide('slide2')"
        />
        <mdicon
          class="ml-2"
          name="RhombusOutline"
          @click="changeActiveSlide('slide3')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import AppSlide1 from "./Slide1.vue";
import AppSlide2 from "./Slide2.vue";
import AppSlide3 from "./Slide3.vue";
export default {
  name: "Slider",
  components: {
    AppSlide1,
    AppSlide2,
    AppSlide3,
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
      console.log("edw", slide, this.activeSlide);
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
  top: 30%;
  left: 0;
  right: 0;
}

.controls {
  margin-top: 14rem;
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
</style>

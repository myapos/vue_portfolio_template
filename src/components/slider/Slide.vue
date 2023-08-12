<template>
  <div class="flex justify-center flex-col items-center">
    <div class="intro_text text-4xl 2xl:text-2xl lg:text-xl mb-10 lg:mb-5">
      {{ getSlideTitle(activeSlide) }}
    </div>
    <div class="text-base mb-10">{{ getSlideSubTitle(activeSlide) }}</div>
    <div
      class="
        ml-auto
        mr-auto
        left-0
        mb-5
        p-2
        view_more
        hover:bg-gray-900
        cursor-pointer
      "
      @click="viewMore()"
    >
      {{ $t("view_more") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    activeSlide: String,
  },
  methods: {
    viewMore() {
      window.open("/#about", "_self");
    },
    getSlideTitle(activeSlide) {
      // Based on the activeSlide value, determine the appropriate translation key
      // For example, if activeSlide is 1, return "Slider.Slide1.title"
      return this.$t(`Slider.${activeSlide}.title`);
    },
    getSlideSubTitle(activeSlide) {
      // Based on the activeSlide value, determine the appropriate translation key
      // For example, if activeSlide is 1, return "Slider.Slide1.title"
      return this.$t(`Slider.${activeSlide}.subtitle`);
    },
  },
  computed: {
    activeTheme: function () {
      const activeTheme = this.$store.getters.getActiveTheme();
      return activeTheme;
    },
  },
};
</script>

<style scoped>
.view_more {
  max-width: 150px;
  border: 1px solid white;
}
.light_view_more {
  border: 1px solid black;
}
</style>

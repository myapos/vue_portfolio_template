<template>
  <div class="absolute text-center ml-auto mr-auto left-0 right-0">
    <!-- div> -->
    <div class="intro_text text-4xl mb-10">{{ $t("Slider.Slide1.title") }}</div>
    <div class="text-base mb-10">{{ $t("Slider.Slide1.subtitle") }}</div>
    <div
      class="
        ml-auto
        mr-auto
        left-0
        mb-5
        p-2
        view_more
        dark:hover:bg-gray-900
        hover:bg-gray-100
        cursor-pointer
      "
      :class="{ light_view_more: activeTheme === 'light' }"
      @click="viewMore('viewmoreslide1')"
    >
      {{ $t("view_more") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide1",
  methods: {
    viewMore(slide) {
      console.log("edw", slide);
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

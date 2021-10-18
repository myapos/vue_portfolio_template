<template>
  <div>
    <img
      class="relative"
      v-if="activeTheme === 'dark'"
      src="../../assets/black_greet.gif"
    />
    <img
      class="relative"
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
      <div class="intro_text text-4xl mb-10">We have some awesome things</div>
      <div class="text-base mb-10">Let's make the web beautiful together</div>
      <div
        class="
          ml-auto
          mr-auto
          mb-5
          p-2
          view_more
          dark:hover:bg-gray-900
          hover:bg-gray-100
          cursor-pointer
        "
        :class="{ light_view_more: activeTheme === 'light' }"
      >
        View more
      </div>
      <div class="flex cursor-pointer justify-center">
        <mdicon class="ml-2" name="RhombusOutline" />
        <mdicon class="ml-2" name="RhombusOutline" />
        <mdicon class="ml-2" name="RhombusOutline" />
      </div>
    </div>
  </div>
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
.view_more {
  max-width: 150px;
  border: 1px solid white;
}
.light_view_more {
  border: 1px solid black;
}
</style>

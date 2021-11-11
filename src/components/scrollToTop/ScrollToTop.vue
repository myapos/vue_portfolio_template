<template>
  <transition name="fade">
    <div
      v-if="showScrollOnTop"
      class="
        p-2
        md:p-5
        scroll-icon-container
        flex
        justify-center
        items-center
        fixed
        bg-gray-100
        h-6
        w-6
        md:h-10 md:w-10
        bottom-5
        right-5
        mix-blend-exclusion
      "
      @click="scrollToTop"
    >
      <font-awesome-icon icon="arrow-up" color="#676D75" class="scroll-icon" />
    </div>
  </transition>
</template>

<script>
// fa fa-arrow-up
export default {
  name: "ScrollToTop",
  data() {
    return {
      pixels: 0,
      showAfter: 300,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    showScrollOnTop: function () {
      return this.pixels > this.showAfter;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.pixels = window.scrollY;
    },
  },
};
</script>

<style scoped>
.scroll-icon-container {
  border: 1px solid black;
  transform: rotate(45deg);
  z-index: 1;
}
.scroll-icon-container:hover {
  filter: brightness(150%);
  cursor: pointer;
}
.scroll-icon {
  transform: rotate(-45deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <app-mobile-menu v-if="showMobileMenu" :width="width" />
  <app-menu v-if="!showMobileMenu" />
</template>

<script>
import AppMenu from "./Menu.vue";
import AppMobileMenu from "./mobileMenu/MobileMenu.vue";

export default {
  name: "Header",
  components: {
    AppMenu,
    AppMobileMenu,
  },
  props: {},
  data() {
    return {
      width: screen.width,
      mdBreakpoint: 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    showMobileMenu: function () {
      const displayMobileMenu = this.width < this.mdBreakpoint;

      return displayMobileMenu;
    },
  },
  methods: {
    handleResize() {
      this.width = screen.width;
    },
  },
};
</script>

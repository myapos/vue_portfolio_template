<template>
  <app-mobile-menu v-if="showMobileMenu" />
  <app-menu v-if="!showMobileMenu" />
</template>

<script>
import AppMenu from "./Menu.vue";
import AppMobileMenu from "./MobileMenu.vue";

export default {
  name: "Header",
  components: {
    AppMenu,
    AppMobileMenu,
  },
  props: {},
  data() {
    return {
      width: this.getScreenWidth(),
      mdBreakpoint: 768,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = this.getScreenWidth();
    });
  },
  computed: {
    showMobileMenu: function () {
      const displayMobileMenu = this.width < this.mdBreakpoint;

      return displayMobileMenu;
    },
  },
  methods: {
    getScreenWidth() {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return screenWidth;
    },
  },
};
</script>

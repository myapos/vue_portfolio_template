<template>
  <div class="bg-gray-800 p-4 flex justify-between relative">
    <menu-icon class="comb text-purple-50" @click="toggle" />
    <app-mobile-menu-inner-links v-if="displayMenu" />
    <app-switch id="header" :disabled="false" />
  </div>
</template>

<script>
import AppSwitch from "../../ui-kit/switch/Switch";
import AppMobileMenuInnerLinks from "./MobileMenuInnerLinks.vue";
import { MenuIcon } from "@heroicons/vue/solid";
export default {
  name: "MobileMenu",
  components: {
    AppSwitch,
    MenuIcon,
    AppMobileMenuInnerLinks,
  },
  data() {
    return {
      displayMenu: false,
    };
  },
  methods: {
    toggle() {
      this.displayMenu = !this.displayMenu;
    },
  },
};
</script>

<style scoped>
.comb {
  height: 32px;
  width: 32px;
}
</style>

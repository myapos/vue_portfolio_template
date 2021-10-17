<template>
  <div
    class="dark:bg-gray-800 p-4 flex justify-between relative items-center"
    :class="{
      'border-1': displayMenu,
      'border-red-900': displayMenu,
      'border-0': !displayMenu,
    }"
  >
    <menu-icon class="comb dark:text-purple-50" @click="toggle" />
    <app-logo />
    <div class="flex">
      <app-toggle-language /> <app-switch id="header" :disabled="false" />
    </div>

    <transition name="fade">
      <app-mobile-menu-inner-links v-if="displayMenu" :innerMenuWidth="width" />
    </transition>
  </div>
</template>

<script>
import AppSwitch from "../../ui-kit/switch/Switch";
import AppMobileMenuInnerLinks from "./MobileMenuInnerLinks";
import { MenuIcon } from "@heroicons/vue/solid";
import AppToggleLanguage from "../language/ToggleLanguage";
import AppLogo from "../logo/Logo";

export default {
  name: "MobileMenu",
  components: {
    AppSwitch,
    MenuIcon,
    AppMobileMenuInnerLinks,
    AppToggleLanguage,
    AppLogo,
  },
  props: {
    width: Number,
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

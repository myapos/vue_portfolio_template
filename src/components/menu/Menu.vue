<template>
  <div class="dark:bg-gray-800 p-4 flex flex-wrap justify-between items-center">
    <div class="flex items-center">
      <app-logo />
      <app-link
        v-for="menuLink in menuLinks"
        :key="menuLink.target"
        :target="menuLink.target"
        :description="menuLink.description"
      />
    </div>

    <div class="flex items-center">
      <app-toggle-language /> <app-switch id="header" :disabled="false" />
    </div>
  </div>
</template>

<script>
import AppLink from "@/shared/links/Link";
import AppSwitch from "@/shared/switch/Switch";
import AppToggleLanguage from "@/components/language/ToggleLanguage";
import AppLogo from "@/components/logo/Logo";

export default {
  name: "Menu",
  components: {
    AppLink,
    AppSwitch,
    AppToggleLanguage,
    AppLogo,
  },
  computed: {
    menuLinks: function () {
      const menuLinks = this.$store.getters.getMenuLinks();
      return menuLinks;
    },
  },
};
</script>

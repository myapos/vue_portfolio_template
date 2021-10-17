<template>
  <div class="dark:bg-gray-800 p-4 flex flex-wrap justify-between">
    <app-link
      v-for="menuLink in menuLinks"
      :key="menuLink.target"
      :target="menuLink.target"
      :description="menuLink.description"
    />
    <country-flag
      :country="activeLanguage"
      size="normal"
      @click="toggleLanguage"
      class="language"
    />
    <app-switch id="header" :disabled="false" />
  </div>
</template>

<script>
import AppLink from "../ui-kit/links/Link";
import AppSwitch from "../ui-kit/switch/Switch";
import CountryFlag from "vue-country-flag-next";
import { mapState } from "vuex";
import { ACTION_TYPES } from "../store/actionTypes";

export default {
  name: "Menu",
  components: {
    AppLink,
    AppSwitch,
    CountryFlag,
  },
  computed: {
    ...mapState({
      menuLinks: (state) => state.menuLinks,
      activeLanguage: (state) => state.activeLanguage,
    }),
  },
  methods: {
    toggleLanguage() {
      this.$store.dispatch(ACTION_TYPES.TOGGLE_LANGUAGE);
    },
  },
};
</script>

<style scoped>
.language {
  cursor: pointer;
}
</style>

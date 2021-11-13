<template>
  <app-country-flag
    :country="activeLanguage"
    size="normal"
    @click="toggleLanguage"
    class="language"
  />
</template>

<script>
import { mapState } from "vuex";
import AppCountryFlag from "vue-country-flag-next";
import { ACTION_TYPES } from "@/store/actionTypes";

export default {
  name: "ToggleLanguage",
  components: {
    AppCountryFlag,
  },
  data() {
    return {};
  },
  methods: {
    toggleLanguage() {
      this.$store.dispatch(ACTION_TYPES.TOGGLE_LANGUAGE);
      this.changeLocale();
    },
    changeLocale() {
      console.log("this.$i18n.locale", this.$store.state.activeLanguage);
      this.$i18n.locale =
        this.$store.state.activeLanguage === "gb" ? "en" : "el";
    },
  },
  computed: {
    ...mapState({
      activeLanguage: (state) => {
        // this.$i18n.locale = state.activeLanguage === "gb" ? "en" : "el";
        return state.activeLanguage;
      },
    }),
  },
};
</script>

<style>
.language {
  cursor: pointer;
}
</style>

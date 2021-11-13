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
  mounted() {
    this.$i18n.locale = this.$store.state.activeLanguage === "gb" ? "en" : "el";
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
      this.$i18n.locale =
        this.$store.state.activeLanguage === "gb" ? "en" : "el";
    },
  },
  computed: {
    ...mapState({
      activeLanguage: (state) => {
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

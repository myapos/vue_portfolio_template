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
import { ACTION_TYPES } from "../../store/actionTypes";

export default {
  name: "ToggleLanguage",
  components: {
    AppCountryFlag,
  },
  methods: {
    toggleLanguage() {
      console.log("this", this.$i18n);
      this.$store.dispatch(ACTION_TYPES.TOGGLE_LANGUAGE);
    },
  },
  computed: {
    ...mapState({
      activeLanguage: (state) => state.activeLanguage,
    }),
  },
};
</script>

<style>
.language {
  cursor: pointer;
}
</style>

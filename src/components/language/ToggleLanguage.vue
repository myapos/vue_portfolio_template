<template>
  <app-country-flag
    :country="activeLanguage"
    size="normal"
    @click="toggleLanguage"
    class="language"
  />
</template>

<script>
import AppCountryFlag from "vue-country-flag-next";
import { mapState } from "vuex";
import { ACTION_TYPES } from "../../store/actionTypes";

export default {
  name: "ToggleLanguage",
  components: {
    AppCountryFlag,
  },
  computed: {
    ...mapState({
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

<style>
.language {
  cursor: pointer;
}
</style>

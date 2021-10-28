<template>
  <router-view />
</template>

<script>
import { ACTION_TYPES } from "./store/actionTypes";
import * as common from "./shared/common";

export default {
  name: "App",
  components: {},
  beforeCreate() {
    this.$store.dispatch(ACTION_TYPES.INITIALISE_STORE);

    let htmlClasses = document.querySelector("html").classList;
    const cachedProperty = localStorage.getItem(
      common.propertyKeyToLocalStoreTheme
    );

    const isCached =
      cachedProperty && cachedProperty.length > 0 && cachedProperty === "true";

    if (isCached) {
      // enable light theme
      htmlClasses.remove("dark");
    } else {
      // enable dark theme
      htmlClasses.add("dark");
    }
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <div class="dark:bg-gray-800 p-4 flex flex-wrap justify-between">
    <app-link
      v-for="menuLink in menuLinks"
      :key="menuLink.target"
      :target="menuLink.target"
      :description="menuLink.description"
    />
    <app-switch id="header" :disabled="false" />
  </div>
</template>

<script>
import AppLink from "../ui-kit/links/Link";
import AppSwitch from "../ui-kit/switch/Switch";
import { mapState } from "vuex";
export default {
  name: "Menu",
  components: {
    AppLink,
    AppSwitch,
  },
  computed: {
    ...mapState({
      menuLinks: (state) => state.menuLinks,
    }),
  },
};
</script>

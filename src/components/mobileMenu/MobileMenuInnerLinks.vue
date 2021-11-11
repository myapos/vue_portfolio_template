<template>
  <div
    class="
      absolute
      top-full
      left-0
      p-5
      bg-gray-100
      dark:bg-gray-800
      opacity-90
      rounded-b-sm
      layer
    "
    :style="{ width: innerMenuWidth + 'px', 'border-top': '1px solid red' }"
  >
    <div class="flex flex-col">
      <app-link
        v-for="menuLink in menuLinks"
        :key="menuLink.target"
        :target="menuLink.target"
        :description="menuLink.description"
      />
    </div>
  </div>
</template>

<script>
import AppLink from "@/shared/links/Link";
import { mapState } from "vuex";

export default {
  name: "MobileMenuInnerLinks",
  components: {
    AppLink,
  },
  props: {
    innerMenuWidth: Number,
  },
  computed: {
    ...mapState({
      menuLinks: (state) => state.menuLinks,
    }),
  },
};
</script>

<style scoped>
.layer {
  z-index: 1000;
}
</style>

<template>
  <div
    class="
      absolute
      top-full
      left-0
      p-5
      dark:bg-gray-800
      opacity-90
      rounded-b-sm
    "
    :style="{ width: innerMenuWidth + 'px', 'border-top': '1px solid red' }"
  >
    <div class="layer flex flex-col">
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
import AppLink from "../../ui-kit/links/Link";
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

<style scoped></style>

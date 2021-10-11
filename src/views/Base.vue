<template>
  <app-menu />
  <div class="base">Base</div>
  <app-footer />
</template>

<script>
import AppMenu from "../components/Menu.vue";
import AppFooter from "../components/Footer.vue";
export default {
  name: "Base",
  components: {
    AppMenu,
    AppFooter,
  },
  props: {},
};
</script>

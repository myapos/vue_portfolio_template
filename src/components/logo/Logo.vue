<template>
  <app-inline-svg :src="require('../../assets/logo/tree.svg')" class="logo" />
</template>

<script>
import AppInlineSvg from "vue-inline-svg";
export default {
  name: "Logo",
  components: {
    AppInlineSvg,
  },
};
</script>

<style scoped>
.logo {
  width: 64px;
  height: 64px;
}
</style>

<template>
  <div>
    <div>{{ item.title }}</div>
    <div>{{ item.subtitle }}</div>
    <div>{{ item.Demo }}</div>
    <!-- <div>{{ item.background_image }}</div> -->
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    item: Object,
  },
};
</script>

<style scoped></style>

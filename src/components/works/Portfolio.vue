<template>
  <div
    class="
      items_container
      flex flex-row
      justify-center
      align-center
      flex-wrap
      border-gray-500
    "
  >
    <div
      v-for="item in items"
      :key="item"
      class="
        m-5
        p-5
        border-gray-500
        rounded-sm
        portfolio_card
        bg-gray-200
        dark:bg-gray-500 dark:text-gray-50
      "
      :style="{
        backgroundImage: 'url(' + item.background_image + ')',
      }"
    >
      <app-portfolio-card :item="item" />
    </div>
  </div>
</template>

<script>
import AppPortfolioCard from "./PortfolioCard.vue";
export default {
  name: "Portfolio",
  components: {
    AppPortfolioCard,
  },
  data() {
    return {
      test: require("../../assets/p2.jpg"),
    };
  },
  props: {
    items: Array,
  },
  methods: {},
};
</script>

<style scoped>
.items_container {
  max-width: 600px;
  margin: 0 auto;
}
.portfolio_card {
  cursor: pointer;
  width: 150px;
  height: 150px;
  background-size: contain;
}
</style>

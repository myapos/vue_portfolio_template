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
        item
        bg-gray-200
        dark:bg-gray-500 dark:text-gray-50
      "
    >
      <app-portfolio-card :item="item" />
    </div>
  </div>
</template>

<script>
import AppPortfolioCard from "./ProtfolioCard.vue";
export default {
  name: "Portfolio",
  components: {
    AppPortfolioCard,
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
.item {
  cursor: pointer;
}
</style>

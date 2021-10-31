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
    @mouseover="show = true"
    @mouseout="show = false"
  >
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div
        v-for="item in items"
        :key="item"
        class="
          m-5
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
    </transition-group>
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
      show: false,
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
  width: 150px;
  height: 150px;
  background-size: contain;
}
</style>

<template>
  <div class="portfolio_container">
    <div
      class="
        portfolio_details
        bg-gray-50
        text-gray-900
        dark:bg-gray-900 dark:text-gray-50
      "
    >
      <div class="title text-lg p-2">{{ item.title }}</div>
      <div class="text-sm p-2">{{ item.subtitle }}</div>
      <a
        class="p-2 text-xs italic text-blue-600 demo"
        :href="item.Demo"
        target="_blank"
        >Demo</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    item: Object,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.portfolio_container {
  width: 100%;
  height: 100%;
}
.portfolio_details {
  width: 100%;
  height: 100%;
  opacity: 0;
}

.portfolio_details:hover {
  opacity: 0.9;
}
.demo:hover {
  filter: brightness(150%);
}
</style>

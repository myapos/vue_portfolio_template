<template>
  <div class="flex justify-center m-5">
    <ul id="tabs" class="flex flex-wrap flex-row">
      <li
        v-for="(tab, index) in tabs"
        :key="tab"
        class="
          m-2
          tab
          p-2
          bg-gray-200
          dark:bg-gray-500 dark:text-gray-50
          border-gray-500
          rounded-sm
        "
        :class="{ activeTab: tab === activeTab }"
        @click="tabHandler(index)"
      >
        {{ $t(tab) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PortfolioTabs",
  props: {
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.$props.tabs[0],
    };
  },
  methods: {
    tabHandler(index) {
      this.activeTab = this.$props.tabs[index];
      this.$emit("changedTab", this.activeTab);
    },
  },
};
</script>

<style scoped>
.tab {
  cursor: pointer;
}
.tab:hover {
  filter: brightness(80%);
}
.activeTab {
  filter: brightness(70%);
}
</style>

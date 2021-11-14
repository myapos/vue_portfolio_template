<template>
  <div class="relative" id="works">
    <div class="header font-bold text-3xl text-center m-5">
      {{ $t("Works.title") }}
    </div>
    <app-ruler name="information" />
    <div class="flex justify-center teaser">{{ $t("Works.subtitle") }}</div>
    <app-portfolio-tabs :tabs="tabs" @changedTab="changedTab($event)" />
    <app-portfolio :items="items" />
  </div>
</template>

<script>
import AppRuler from "@/shared/ruler/Ruler.vue";
import AppPortfolioTabs from "./PortfolioTabs.vue";
import AppPortfolio from "./Portfolio.vue";
import * as data from "./data";
export default {
  name: "Works",
  components: {
    AppRuler,
    AppPortfolio,
    AppPortfolioTabs,
  },
  data() {
    const { tabs, categories } = data;

    return {
      tabs,
      activeTab: tabs[0],
      categories,
    };
  },
  methods: {
    changedTab(activeTab) {
      this.activeTab = activeTab;
    },
  },
  computed: {
    items: function () {
      console.log("this", this.activeTab);
      if (this.activeTab === "Works.all") {
        const all = [];
        Object.keys(this.categories).forEach((key) => {
          all.push(...this.categories[key]);
        });
        return all;
      }

      return this.categories[this.activeTab];
    },
  },
};
</script>

<style scoped>
.header {
  text-transform: uppercase;
}
</style>

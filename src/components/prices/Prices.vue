<template>
  <div class="prices relative p-16" id="prices">
    <div class="intro_text text-3xl text-center">{{ $t("Prices.title") }}</div>
    <app-ruler name="information" />
    <div class="mb-24 text-center teaser">{{ $t("Prices.subtitle") }}</div>

    <div class="flex flex-row justify-center flex-wrap">
      <app-price-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import AppRuler from "@/shared/ruler/Ruler.vue";
import AppPriceCard from "./PriceCard.vue";
import * as data from "./data";
export default {
  name: "Prices",
  components: { AppRuler, AppPriceCard },
  data() {
    return {
      products: data.products,
    };
  },
};
</script>

<style scoped>
.intro_text {
  text-transform: uppercase;
}
.prices {
  margin: 0 auto;
}
</style>

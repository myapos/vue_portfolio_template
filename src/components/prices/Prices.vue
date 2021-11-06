<template>
  <div class="prices relative p-16" id="prices">
    <div class="intro_text text-3xl text-center">PRICES</div>
    <app-ruler name="information" />
    <div class="mb-24 text-center teaser">That how much</div>

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
import AppRuler from "@/ui-kit/ruler/Ruler.vue";
import AppPriceCard from "./PriceCard.vue";
import * as data from "./data";
export default {
  name: "Prices",
  components: { AppRuler, AppPriceCard },
  data() {
    console.log("products", data.products);
    return {
      products: data.products,
    };
  },
};
</script>

<style scoped>
img {
  max-height: 400px;
  max-width: 200px;
}

img:hover {
  cursor: e-resize;
}
.intro_text {
  text-transform: uppercase;
}
</style>

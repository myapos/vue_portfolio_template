<template>
  <transition-group
    name="custom-classes-transition"
    enter-active-class="animated flipInY"
  >
    <div
      :key="product.id"
      class="price_card flex flex-col bg-gray-200 m-5 overflow-hidden"
      :class="{
        'border-t-2 border-gray-800': !product.popular,
        'border-b-2 border-gray-800 shadow-2xl popular': product.popular,
      }"
      v-if="shouldDisplay"
    >
      <app-price-card-header :product="product" />
      <div class="text-center bg-white py-2 px-10">{{ product.usage }}</div>
      <div class="text-center bg-white py-2 px-10">
        {{ product.num_of_projects }}
      </div>
      <div class="text-center bg-white py-2 px-10">{{ product.space }}</div>
      <div class="text-center bg-white py-2 px-10">{{ product.domain }}</div>
      <div class="text-center py-5">
        <div
          class="bg-gray-800 order text-white w-3/6 m-0 mx-auto"
          @click="order(product)"
        >
          Order Now!
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import AppPriceCardHeader from "./PriceCardHeader";
// import { isInViewport } from "@/helpers/isInViewport";
export default {
  name: "PriceCard",
  components: {
    AppPriceCardHeader,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      shouldDisplay: false,
    };
  },
  mounted() {
    this.shouldDisplay = true;
  },
  methods: {
    order(product) {
      alert(JSON.stringify(product));
    },
  },
};
</script>

<style scoped>
.order:hover {
  cursor: pointer;
  filter: brightness(150%);
}
.popular {
  zoom: 120%;
  transform: translate(0px, -25px);
}
.price_card {
  min-width: 150px;
}
</style>

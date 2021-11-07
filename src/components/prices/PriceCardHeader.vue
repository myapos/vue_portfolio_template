<template>
  <div class="text-center relative">
    <div
      class="bg-gray-100 pt-5 px-10"
      :class="{
        'bg-gray-800 text-white': product.popular,
      }"
    >
      <font-awesome-icon
        :icon="product.icon"
        size="lg"
        :class="{
          rotate: product.icon == 'plug',
        }"
      />
      <div
        v-if="product.popular"
        class="absolute text-gray-800 rotate popular_label text-center"
      >
        Popular
      </div>
    </div>
    <div
      class="bg-gray-100 pb-5 px-10"
      :class="{
        'bg-gray-800 text-white': product.popular,
      }"
    >
      {{ product.title }}
    </div>
    <div class="text-center text-gray-900 p-2 text-3xl">
      {{ product.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceCardHeader",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.rotate {
  transform: rotate(45deg);
}
.popular_label {
  top: 10px;
  right: -80px;
  width: 100%;
  background-color: white;
  font-size: 0.6rem;
}
@media only screen and (max-width: 400px) {
  .popular_label {
    right: -73px;
  }
}

@media only screen and (max-width: 380px) {
  .popular_label {
    right: -55px;
    top: 15px;
  }
}
</style>

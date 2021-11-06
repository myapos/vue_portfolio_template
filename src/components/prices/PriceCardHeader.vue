<template>
  <div class="text-center">
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
</style>

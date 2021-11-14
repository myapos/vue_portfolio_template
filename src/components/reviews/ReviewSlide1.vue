<template>
  <div class="absolute text-center ml-auto mr-auto left-0 right-0">
    <!-- div> -->
    <blockquote class="text-1xl flex justify-center">
      <div class="quote mb-6">{{ $t("Reviews.slide1") }}</div>
    </blockquote>
    <footer class="text-base mb-2">
      <cite title="Daryl Hodgeman">Daryl Hodgeman</cite>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ReviewSlide1",
};
</script>

<style scoped>
.quote {
  width: 600px;
}
</style>

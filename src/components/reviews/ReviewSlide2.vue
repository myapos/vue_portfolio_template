<template>
  <div class="absolute text-center ml-auto mr-auto left-0 right-0">
    <!-- <div> -->
    <blockquote class="text-1xl flex justify-center">
      <div class="quote mb-6">
        {{ $t("Reviews.slide2") }}
      </div>
    </blockquote>
    <footer class="text-base mb-2">
      <cite title="John Doe">John Doe</cite>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ReviewSlide2",
};
</script>

<style scoped>
.quote {
  width: 600px;
}
</style>

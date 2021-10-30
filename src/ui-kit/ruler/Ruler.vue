<template>
  <div
    class="
      subsection
      flex flex-row
      content-center
      items-center
      justify-center
      pt-2
    "
  >
    <hr class="ruler" />
    <div class="p-3"><mdicon :name="name" /></div>
    <hr class="ruler" />
  </div>
</template>

<script>
export default {
  name: "ruler",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.ruler {
  max-width: 200px;
  height: px;
  width: 200px;
  border-top: 1px solid #ccc;
}
</style>

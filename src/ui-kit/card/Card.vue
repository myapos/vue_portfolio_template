<template>
  <div class="card flex flex-row">
    <div class="m-5"><mdicon :name="icon" width="64" height="64" /></div>
    <div class="flex flex-col m-5">
      <div class="text-justify">{{ header }}</div>
      <div class="text-justify">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: String,
    header: String,
    icon: String,
  },
};
</script>

<style></style>
